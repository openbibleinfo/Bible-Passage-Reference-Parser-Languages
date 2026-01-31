"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mtq.js";

describe("Localized book Rev (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mtq)", () => {
		expect(p.parse("Khái Huyền 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Khn 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mtq)", () => {
		expect(p.parse("Ma-thi-ơ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mtq)", () => {
		expect(p.parse("Mác 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mtq)", () => {
		expect(p.parse("Lu-ca 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lca 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mtq)", () => {
		expect(p.parse("1Gig 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mtq)", () => {
		expect(p.parse("2Gig 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mtq)", () => {
		expect(p.parse("3 Giăng 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Gig 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mtq)", () => {
		expect(p.parse("1 Giăng 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Giăng 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mtq)", () => {
		expect(p.parse("2 Giăng 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Giăng 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mtq)", () => {
		expect(p.parse("Giăng 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Gig 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mtq)", () => {
		expect(p.parse("Tàn Wiêc 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wiê 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mtq)", () => {
		expect(p.parse("Đô-ma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Đô 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mtq)", () => {
		expect(p.parse("1 Cô-đinh-tô 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Cô-đinh-tô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mtq)", () => {
		expect(p.parse("2 Cô-đinh-tô 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Cô-đinh-tô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mtq)", () => {
		expect(p.parse("1Cô 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mtq)", () => {
		expect(p.parse("2Cô 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mtq)", () => {
		expect(p.parse("Cô-lô-xe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Côl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mtq)", () => {
		expect(p.parse("Ga-la-ti 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mtq)", () => {
		expect(p.parse("Ê-phê-xô 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Êph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mtq)", () => {
		expect(p.parse("Phi-líp-pi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mtq)", () => {
		expect(p.parse("1 Tê-xa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tê-xa-lô-ni-ca 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mtq)", () => {
		expect(p.parse("2 Tê-xa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tê-xa-lô-ni-ca 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mtq)", () => {
		expect(p.parse("1Tê 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mtq)", () => {
		expect(p.parse("2Tê 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtq)", () => {
		expect(p.parse("1 Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti-mô-thê 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtq)", () => {
		expect(p.parse("2 Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti-mô-thê 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mtq)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mtq)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mtq)", () => {
		expect(p.parse("Ti-tốt 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mtq)", () => {
		expect(p.parse("Phi-lê-môn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mtq)", () => {
		expect(p.parse("Hê-bơ-đơ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hêb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mtq)", () => {
		expect(p.parse("Gia-cơ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Gia 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mtq)", () => {
		expect(p.parse("1 Phi-e-đơ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Phi-e-đơ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mtq)", () => {
		expect(p.parse("2 Phi-e-đơ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Phi-e-đơ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mtq)", () => {
		expect(p.parse("1Phi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mtq)", () => {
		expect(p.parse("2Phi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mtq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mtq)", () => {
		expect(p.parse("Giu-đe 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Giđ 1:1").osis()).toEqual("Jude.1.1");
	});
});

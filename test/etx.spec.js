"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/etx.js";

describe("Localized book Rev (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (etx)", () => {
		expect(p.parse("Nikɔn ne kɛ Phaal 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nkp 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (etx)", () => {
		expect(p.parse("ɛMacu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ɛMac 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (etx)", () => {
		expect(p.parse("ɛMarakus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ɛMar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (etx)", () => {
		expect(p.parse("ɛLuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ɛLuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (etx)", () => {
		expect(p.parse("1ɛYoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (etx)", () => {
		expect(p.parse("2ɛYoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (etx)", () => {
		expect(p.parse("3 ɛYohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3ɛYoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (etx)", () => {
		expect(p.parse("1 ɛYohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ɛYohana 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (etx)", () => {
		expect(p.parse("2 ɛYohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ɛYohana 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (etx)", () => {
		expect(p.parse("ɛYohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ɛYoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (etx)", () => {
		expect(p.parse("ɛTomɛ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ɛTom 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (etx)", () => {
		expect(p.parse("iRooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("iRom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (etx)", () => {
		expect(p.parse("1 iKɔrɔntos 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. iKɔrɔntos 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (etx)", () => {
		expect(p.parse("2 iKɔrɔntos 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. iKɔrɔntos 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (etx)", () => {
		expect(p.parse("1iKɔr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (etx)", () => {
		expect(p.parse("2iKɔr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (etx)", () => {
		expect(p.parse("iKɔlɔsi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("iKɔl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (etx)", () => {
		expect(p.parse("iGalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("iGal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (etx)", () => {
		expect(p.parse("iFisus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("iFis 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (etx)", () => {
		expect(p.parse("iFilibi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("iFil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (etx)", () => {
		expect(p.parse("1 iTasɔlɔnika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. iTasɔlɔnika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (etx)", () => {
		expect(p.parse("2 iTasɔlɔnika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. iTasɔlɔnika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (etx)", () => {
		expect(p.parse("1iTas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (etx)", () => {
		expect(p.parse("2iTas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (etx)", () => {
		expect(p.parse("1 ɛTimɔti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ɛTimɔti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (etx)", () => {
		expect(p.parse("2 ɛTimɔti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ɛTimɔti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (etx)", () => {
		expect(p.parse("1ɛTim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (etx)", () => {
		expect(p.parse("2ɛTim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (etx)", () => {
		expect(p.parse("ɛTitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ɛTi 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (etx)", () => {
		expect(p.parse("ɛFilimɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ɛFil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (etx)", () => {
		expect(p.parse("iBirani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("iBir 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (etx)", () => {
		expect(p.parse("ɛYakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ɛYak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (etx)", () => {
		expect(p.parse("1 ɛBiturus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ɛBiturus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (etx)", () => {
		expect(p.parse("2 ɛBiturus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ɛBiturus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (etx)", () => {
		expect(p.parse("1ɛBi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (etx)", () => {
		expect(p.parse("2ɛBi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (etx)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (etx)", () => {
		expect(p.parse("ɛYahuza 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ɛYah 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/izr.js";

describe("Localized book Rev (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (izr)", () => {
		expect(p.parse("Ike̱ng a ta tonong aYohana 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("aR. aYoh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (izr)", () => {
		expect(p.parse("aMatiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("aMat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (izr)", () => {
		expect(p.parse("aMarkus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("aMar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (izr)", () => {
		expect(p.parse("aLuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("aLuk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (izr)", () => {
		expect(p.parse("1 aYohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 aYoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. aYohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. aYoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (izr)", () => {
		expect(p.parse("2 aYohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 aYoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. aYohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. aYoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (izr)", () => {
		expect(p.parse("3 aYohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 aYoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. aYohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. aYoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (izr)", () => {
		expect(p.parse("aYohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("aYoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (izr)", () => {
		expect(p.parse("Itomong Ámanzo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("I. Ámanzo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (izr)", () => {
		expect(p.parse("aRom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (izr)", () => {
		expect(p.parse("1 aKoranti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Akor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. aKoranti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (izr)", () => {
		expect(p.parse("2 aKoranti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Akor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. aKoranti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (izr)", () => {
		expect(p.parse("aKolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (izr)", () => {
		expect(p.parse("aGalati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("aGal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (izr)", () => {
		expect(p.parse("Afisa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Afi 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (izr)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("aFil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (izr)", () => {
		expect(p.parse("1 aTasalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 aTas 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. aTasalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. aTas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (izr)", () => {
		expect(p.parse("2 aTasalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 aTas 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. aTasalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. aTas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (izr)", () => {
		expect(p.parse("1 aTimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 aTim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. aTimoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. aTim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (izr)", () => {
		expect(p.parse("2 aTimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 aTim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. aTimoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. aTim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (izr)", () => {
		expect(p.parse("aTitus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (izr)", () => {
		expect(p.parse("aFilimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("aFilim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (izr)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibra 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (izr)", () => {
		expect(p.parse("aYakub 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("aYak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (izr)", () => {
		expect(p.parse("1 aBitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 aBit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. aBitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. aBit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (izr)", () => {
		expect(p.parse("2 aBitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 aBit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. aBitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. aBit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (izr)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (izr)", () => {
		expect(p.parse("aZhud 1:1").osis()).toEqual("Jude.1.1");
	});
});

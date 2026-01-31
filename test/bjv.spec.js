"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bjv.js";

describe("Localized book Lam (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bjv)", () => {
		expect(p.parse("No̰ Kuwə Ndoo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nknd 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bjv)", () => {
		expect(p.parse("Nḛ kɨ tḛḛ kɨ dɔe 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ntd 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bjv)", () => {
		expect(p.parse("Rutɨ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bjv)", () => {
		expect(p.parse("Jonasɨ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bjv)", () => {
		expect(p.parse("Matɨye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bjv)", () => {
		expect(p.parse("Markɨ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bjv)", () => {
		expect(p.parse("Lukɨ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bjv)", () => {
		expect(p.parse("1Ja̰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bjv)", () => {
		expect(p.parse("2Ja̰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bjv)", () => {
		expect(p.parse("3 Ja̰ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ja̰ 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bjv)", () => {
		expect(p.parse("1 Ja̰ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ja̰ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bjv)", () => {
		expect(p.parse("2 Ja̰ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ja̰ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bjv)", () => {
		expect(p.parse("Ja̰ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bjv)", () => {
		expect(p.parse("Kɨlə lə Njé kaw kɨlə je 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Knjk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bjv)", () => {
		expect(p.parse("Rom je 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bjv)", () => {
		expect(p.parse("Korḛtɨ je kɨ dɔsa̰y 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kɔr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bjv)", () => {
		expect(p.parse("Korḛtɨ je kɨ ko̰ joo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kɔr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bjv)", () => {
		expect(p.parse("1 Korḛtɨ je 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korḛtɨ je 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bjv)", () => {
		expect(p.parse("2 Korḛtɨ je 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korḛtɨ je 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bjv)", () => {
		expect(p.parse("Kolosɨ je 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bjv)", () => {
		expect(p.parse("Galatɨ je 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bjv)", () => {
		expect(p.parse("Epəjɨ je 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bjv)", () => {
		expect(p.parse("Pɨlɨpɨ je 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Plp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bjv)", () => {
		expect(p.parse("1 Təsalonɨkɨ je 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Təsalonɨkɨ je 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bjv)", () => {
		expect(p.parse("2 Təsalonɨkɨ je 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Təsalonɨkɨ je 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bjv)", () => {
		expect(p.parse("Təsalonɨkɨ je 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Təsa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bjv)", () => {
		expect(p.parse("Təsalonɨkɨ je 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Təsa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bjv)", () => {
		expect(p.parse("1 Tɨmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tɨmote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bjv)", () => {
		expect(p.parse("2 Tɨmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tɨmote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bjv)", () => {
		expect(p.parse("1Tɨmote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tɨm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bjv)", () => {
		expect(p.parse("2Tɨmote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tɨm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bjv)", () => {
		expect(p.parse("Tɨtɨ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bjv)", () => {
		expect(p.parse("Pɨləmo̰ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bjv)", () => {
		expect(p.parse("Ebɨrə je 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bjv)", () => {
		expect(p.parse("Jakɨ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bjv)", () => {
		expect(p.parse("1 Pɨyər 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pɨyər 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bjv)", () => {
		expect(p.parse("2 Pɨyər 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pɨyər 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bjv)", () => {
		expect(p.parse("1Pɨyər 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pɨ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bjv)", () => {
		expect(p.parse("2Pɨyər 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pɨ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bjv)", () => {
		expect(p.parse("Judɨ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Preferred book names (bjv)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle preferred book names (bjv)", () => {
		expect(p.parse("1 Korḛtɨ je 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korḛtɨ je kɨ dɔsa̰y 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("2 Korḛtɨ je 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korḛtɨ je kɨ ko̰ joo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kɨlə lə NJé kaw kɨlə je 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nḛ kɨ tḛḛ kɨ dɔe 1:1").osis()).toEqual("Rev.1.1");
	});
});

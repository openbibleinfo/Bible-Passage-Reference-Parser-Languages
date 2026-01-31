"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ekk.js";

describe("Localized book Gen (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ekk)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ekk)", () => {
		expect(p.parse("Johannese ilmutus 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilmutus 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ilm 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ekk)", () => {
		expect(p.parse("Matteuse evangeelium 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteuse 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matteus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ekk)", () => {
		expect(p.parse("Markuse evangeelium 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markuse 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ekk)", () => {
		expect(p.parse("Luuka evangeelium 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ekk)", () => {
		expect(p.parse("1Jh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ekk)", () => {
		expect(p.parse("2Jh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ekk)", () => {
		expect(p.parse("3. Johannese 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Johannese 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ekk)", () => {
		expect(p.parse("Johannese evangeelium 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannese 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ekk)", () => {
		expect(p.parse("1 Johannese 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannese 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ekk)", () => {
		expect(p.parse("2 Johannese 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannese 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ekk)", () => {
		expect(p.parse("Apostlite teod 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostlite 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ekk)", () => {
		expect(p.parse("Roomlastele 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roomlased 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ekk)", () => {
		expect(p.parse("1 Korintlastele 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintlastele 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ekk)", () => {
		expect(p.parse("2 Korintlastele 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintlastele 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ekk)", () => {
		expect(p.parse("1Kr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ekk)", () => {
		expect(p.parse("2Kr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ekk)", () => {
		expect(p.parse("Koloslastele 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kl 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ekk)", () => {
		expect(p.parse("Galaatlastele 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ekk)", () => {
		expect(p.parse("Efeslastele 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ekk)", () => {
		expect(p.parse("Filiplastele 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ekk)", () => {
		expect(p.parse("1 Tessalooniklastele 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tessalooniklastele 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ekk)", () => {
		expect(p.parse("2 Tessalooniklastele 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tessalooniklastele 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ekk)", () => {
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ekk)", () => {
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ekk)", () => {
		expect(p.parse("1 Timoteosele 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteosele 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ekk)", () => {
		expect(p.parse("2 Timoteosele 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteosele 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ekk)", () => {
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ekk)", () => {
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ekk)", () => {
		expect(p.parse("Tiitusele 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ekk)", () => {
		expect(p.parse("Fileemonile 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ekk)", () => {
		expect(p.parse("Heebrealastele 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ekk)", () => {
		expect(p.parse("Jaakobuse 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakoobuse 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ekk)", () => {
		expect(p.parse("1 Peetruse 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peetruse 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ekk)", () => {
		expect(p.parse("2 Peetruse 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peetruse 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ekk)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ekk)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ekk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ekk)", () => {
		expect(p.parse("Juuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});

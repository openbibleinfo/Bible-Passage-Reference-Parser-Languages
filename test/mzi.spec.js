"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mzi.js";

describe("Localized book Gen (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mzi)", () => {
		expect(p.parse("Jenesii̱s 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mzi)", () => {
		expect(p.parse("Éksondo̱ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mzi)", () => {
		expect(p.parse("Lebitiko̱ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Leb 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mzi)", () => {
		expect(p.parse("Xki̱ 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mzi)", () => {
		expect(p.parse("Kjo̱a̱chaꞌaá 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kjo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mzi)", () => {
		expect(p.parse("Ni xi akakoo̱ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nxa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mzi)", () => {
		expect(p.parse("Ndeuteronomio̱ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Nde 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Ruth (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mzi)", () => {
		expect(p.parse("Na̱ Ruu̱t 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Nar 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Esth (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mzi)", () => {
		expect(p.parse("Na̱ Estee̱r (Ebreo̱) 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Na̱ Estee̱r 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Nae 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mzi)", () => {
		expect(p.parse("Joo̱b 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Joo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mzi)", () => {
		expect(p.parse("Xo̱jo̱n Salmoo̱ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Xsl 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mzi)", () => {
		expect(p.parse("Énkjínkón 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Enk 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mzi)", () => {
		expect(p.parse("Eklesiastee̱ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mzi)", () => {
		expect(p.parse("Én xí nda xi ꞌniú tsjatsó ngasee̱ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Exn 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jonah (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mzi)", () => {
		expect(p.parse("Jonaa̱ 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mzi)", () => {
		expect(p.parse("Matioo̱ 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mzi)", () => {
		expect(p.parse("Markoo̱ 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mzi)", () => {
		expect(p.parse("Rkaa̱ 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mzi)", () => {
		expect(p.parse("1xj 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mzi)", () => {
		expect(p.parse("2xj 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mzi)", () => {
		expect(p.parse("3 Xo̱jo̱o̱n Juaa̱ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3xj 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mzi)", () => {
		expect(p.parse("1 Xo̱jo̱o̱n Juaa̱ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Xo̱jo̱o̱n Juaa̱ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mzi)", () => {
		expect(p.parse("2 Xo̱jo̱o̱n Juaa̱ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Xo̱jo̱o̱n Juaa̱ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mzi)", () => {
		expect(p.parse("Juaa̱ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jua 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mzi)", () => {
		expect(p.parse("Ni xi kamá 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nxk 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mzi)", () => {
		expect(p.parse("Xota̱ Roma̱ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Xro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mzi)", () => {
		expect(p.parse("1 Xota̱ Korinto̱ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Xota̱ Korinto̱ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mzi)", () => {
		expect(p.parse("2 Xota̱ Korinto̱ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Xota̱ Korinto̱ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mzi)", () => {
		expect(p.parse("1xk 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mzi)", () => {
		expect(p.parse("2xk 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mzi)", () => {
		expect(p.parse("Xota̱ Kolosa̱ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Xko 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mzi)", () => {
		expect(p.parse("Xota̱ Ngalasia̱ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Xga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mzi)", () => {
		expect(p.parse("Xota̱ Éfeso̱ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Xef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mzi)", () => {
		expect(p.parse("Xota̱ Filipo̱ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Xfi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mzi)", () => {
		expect(p.parse("1 Xota̱ Tesalónika̱ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Xota̱ Tesalónika̱ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mzi)", () => {
		expect(p.parse("2 Xota̱ Tesalónika̱ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Xota̱ Tesalónika̱ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mzi)", () => {
		expect(p.parse("1xt 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mzi)", () => {
		expect(p.parse("2xt 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mzi)", () => {
		expect(p.parse("1 Timoo̱ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoo̱ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mzi)", () => {
		expect(p.parse("2 Timoo̱ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoo̱ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mzi)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mzi)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mzi)", () => {
		expect(p.parse("Titoo̱ 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mzi)", () => {
		expect(p.parse("Filemoo̱ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mzi)", () => {
		expect(p.parse("Xota̱ Ebreo̱ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Xeb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mzi)", () => {
		expect(p.parse("Xo̱jo̱o̱n Sandiyaá 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Xsa 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mzi)", () => {
		expect(p.parse("1 Xo̱jo̱o̱n Peé 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Xo̱jo̱o̱n Peé 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mzi)", () => {
		expect(p.parse("2 Xo̱jo̱o̱n Peé 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Xo̱jo̱o̱n Peé 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mzi)", () => {
		expect(p.parse("1xp 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mzi)", () => {
		expect(p.parse("2xp 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mzi)", () => {
		expect(p.parse("Xo̱jo̱o̱n Jundaa̱ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Xju 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (mzi)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (mzi)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1xj - 3 Xo̱jo̱o̱n Juaa̱").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1xj – 3 Xo̱jo̱o̱n Juaa̱").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1xj — 3 Xo̱jo̱o̱n Juaa̱").osis()).toEqual("1John.1-3John.1");
	});
});

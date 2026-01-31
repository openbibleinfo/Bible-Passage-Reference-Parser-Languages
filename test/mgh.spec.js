"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mgh.js";

describe("Localized book Gen (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mgh)", () => {
		expect(p.parse("Mphattuwelo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mph 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Rev (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mgh)", () => {
		expect(p.parse("Upatakulhelhiya 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wiicoonihera 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Upat 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Wic 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Jonah (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mgh)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mgh)", () => {
		expect(p.parse("Namatayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mgh)", () => {
		expect(p.parse("Namako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mgh)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgh)", () => {
		expect(p.parse("1Nay 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yo 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgh)", () => {
		expect(p.parse("2Nay 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yo 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mgh)", () => {
		expect(p.parse("3 Nayohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Nay 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yo 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mgh)", () => {
		expect(p.parse("1 Nayohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Nayohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohani 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mgh)", () => {
		expect(p.parse("2 Nayohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Nayohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohani 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mgh)", () => {
		expect(p.parse("Nayohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mgh)", () => {
		expect(p.parse("Mitheko 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Miteko 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mitk 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mit 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mgh)", () => {
		expect(p.parse("aRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Arumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Aru 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgh)", () => {
		expect(p.parse("1 o Ukorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Akorintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. o Ukorintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorintu 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgh)", () => {
		expect(p.parse("2 o Ukorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Akorintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. o Ukorintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorintu 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mgh)", () => {
		expect(p.parse("1Ako 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mgh)", () => {
		expect(p.parse("2Ako 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mgh)", () => {
		expect(p.parse("o Ukolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKolosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ukol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mgh)", () => {
		expect(p.parse("o Ugalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Akalata 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ugal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mgh)", () => {
		expect(p.parse("Annefesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("o Uefeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Uef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mgh)", () => {
		expect(p.parse("o Ufilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Afilipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ufil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgh)", () => {
		expect(p.parse("1 o Uthesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. o Uthesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mgh)", () => {
		expect(p.parse("1Uthes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgh)", () => {
		expect(p.parse("2 Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mgh)", () => {
		expect(p.parse("o Uthesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Uthes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgh)", () => {
		expect(p.parse("1 Timotiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Natim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Natim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgh)", () => {
		expect(p.parse("2 Timotiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Natim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Natim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mgh)", () => {
		expect(p.parse("1Natim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tm 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mgh)", () => {
		expect(p.parse("2Natim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tm 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mgh)", () => {
		expect(p.parse("Natito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Nat 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mgh)", () => {
		expect(p.parse("Nafilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Naf 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mgh)", () => {
		expect(p.parse("Annaheperi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aebraniya 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aebr 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mgh)", () => {
		expect(p.parse("Nayakhobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakopu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Nayak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgh)", () => {
		expect(p.parse("1 Napeturo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Peturu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Napeturo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peturu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgh)", () => {
		expect(p.parse("2 Napeturo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Peturu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Napeturo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peturu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mgh)", () => {
		expect(p.parse("1Nap 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mgh)", () => {
		expect(p.parse("2Nap 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mgh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mgh)", () => {
		expect(p.parse("Nayuuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Nayu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jude.1.1");
	});
});

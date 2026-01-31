"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ltg.js";

describe("Localized book Rev (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ltg)", () => {
		expect(p.parse("Apokalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apk 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Matt (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ltg)", () => {
		expect(p.parse("Evangelijs pēc Mateusa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ltg)", () => {
		expect(p.parse("Evangelijs pēc Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ltg)", () => {
		expect(p.parse("Evangelijs pēc Lukasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ltg)", () => {
		expect(p.parse("Sv. Jōņa III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 J 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ltg)", () => {
		expect(p.parse("1 Jōņa I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jōņa I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Jōņa I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Jōņa I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. J 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Sv. Jōņa I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Sv. J 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ltg)", () => {
		expect(p.parse("2 Jōņa II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jōņa II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Jōņa II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Jōņa II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. J 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sv. Jōņa II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Sv. J 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ltg)", () => {
		expect(p.parse("Evangelijs pēc Jōņa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("J 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ltg)", () => {
		expect(p.parse("Apostolu Dorbi 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ap. d 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ltg)", () => {
		expect(p.parse("vēstule romīšim 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ltg)", () => {
		expect(p.parse("1 vēstule korintīšim 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. vēstule korintīšim 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I vēstule korintīšim 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. vēstule korintīšim 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Sv. vēstule korintīšim 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Sv. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ltg)", () => {
		expect(p.parse("2 vēstule korintīšim 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. vēstule korintīšim 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II vēstule korintīšim 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. vēstule korintīšim 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sv. vēstule korintīšim 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Sv. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ltg)", () => {
		expect(p.parse("vēstule kolosīšim 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ltg)", () => {
		expect(p.parse("vēstule galatīšim 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ltg)", () => {
		expect(p.parse("vēstule efezīšim 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ltg)", () => {
		expect(p.parse("vēstule filipīšim 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ltg)", () => {
		expect(p.parse("1 vēstule tessalonikīšim. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. vēstule tessalonikīšim. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I vēstule tessalonikīšim. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. vēstule tessalonikīšim. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Sv. vēstule tessalonikīšim. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Sv. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ltg)", () => {
		expect(p.parse("2 vēstule tessalonikīšim. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. vēstule tessalonikīšim. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II vēstule tessalonikīšim. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. vēstule tessalonikīšim. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sv. vēstule tessalonikīšim. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Sv. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ltg)", () => {
		expect(p.parse("1 vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Sv. vēstule Timotejam 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Sv. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ltg)", () => {
		expect(p.parse("2 vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sv. vēstule Timotejam 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Sv. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ltg)", () => {
		expect(p.parse("vēstule Titam 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ltg)", () => {
		expect(p.parse("vēstule Filemonam 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ltg)", () => {
		expect(p.parse("vēstule ebrejim 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ltg)", () => {
		expect(p.parse("Sv. Jākuba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jk 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ltg)", () => {
		expect(p.parse("1 Pītera I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pītera I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pītera I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pītera I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Sv. Pītera I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Sv. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ltg)", () => {
		expect(p.parse("2 Pītera II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pītera II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pītera II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pītera II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sv. Pītera II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Sv. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ltg)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ltg)", () => {
		expect(p.parse("Sv. Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

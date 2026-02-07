"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/did.js";

describe("Localized book Gen (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (did)", () => {
		expect(p.parse("ꞌThianaattõ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tt 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (did)", () => {
		expect(p.parse("Luugithõõ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Lg 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (did)", () => {
		expect(p.parse("Terethiinit 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Te 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (did)", () => {
		expect(p.parse("ꞌRuuth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (did)", () => {
		expect(p.parse("Yõõna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ya 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (did)", () => {
		expect(p.parse("Maatteeo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (did)", () => {
		expect(p.parse("Maarko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (did)", () => {
		expect(p.parse("ꞌLuuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (did)", () => {
		expect(p.parse("1Yn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (did)", () => {
		expect(p.parse("2Yn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (did)", () => {
		expect(p.parse("3 Yõaannẽ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (did)", () => {
		expect(p.parse("1 Yõaannẽ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yõaannẽ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (did)", () => {
		expect(p.parse("2 Yõaannẽ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yõaannẽ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (did)", () => {
		expect(p.parse("Yõaannẽ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (did)", () => {
		expect(p.parse("Dtiicanĩ cĩg ꞌThooyyiahu 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dh 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (did)", () => {
		expect(p.parse("ꞌRooma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (did)", () => {
		expect(p.parse("1 Korinthia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinthia 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (did)", () => {
		expect(p.parse("2 Korinthia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinthia 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (did)", () => {
		expect(p.parse("1Ka 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (did)", () => {
		expect(p.parse("2Ka 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (did)", () => {
		expect(p.parse("Kolooꞌthe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ke 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (did)", () => {
		expect(p.parse("ꞌGalaaꞌthia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (did)", () => {
		expect(p.parse("Eevvetho 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ev 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (did)", () => {
		expect(p.parse("Pilippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (did)", () => {
		expect(p.parse("1 Tẽꞌthaloonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẽꞌthaloonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (did)", () => {
		expect(p.parse("2 Tẽꞌthaloonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẽꞌthaloonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (did)", () => {
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (did)", () => {
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (did)", () => {
		expect(p.parse("1 Timotteeo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotteeo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (did)", () => {
		expect(p.parse("2 Timotteeo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotteeo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (did)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (did)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (did)", () => {
		expect(p.parse("Tiito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (did)", () => {
		expect(p.parse("Vilõmẽẽnõ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Vi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (did)", () => {
		expect(p.parse("Ebereei 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (did)", () => {
		expect(p.parse("ꞌJeemith 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jm 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (did)", () => {
		expect(p.parse("1 Pẽẽtũrũ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pẽẽtũrũ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (did)", () => {
		expect(p.parse("2 Pẽẽtũrũ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pẽẽtũrũ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (did)", () => {
		expect(p.parse("1Pt 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (did)", () => {
		expect(p.parse("2Pt 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (did)", () => {
		expect(p.parse("ꞌJuud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (did)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (did)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn - 3 Yõaannẽ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn – 3 Yõaannẽ").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yn — 3 Yõaannẽ").osis()).toEqual("1John.1-3John.1");
	});
});

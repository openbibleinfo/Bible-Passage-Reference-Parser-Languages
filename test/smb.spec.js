"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/smb.js";

describe("Localized book Gen (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (smb)", () => {
		expect(p.parse("Muuduko 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mdk. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (smb)", () => {
		expect(p.parse("Mollurolovomato 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Moll. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (smb)", () => {
		expect(p.parse("Pris Womdo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Pris. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (smb)", () => {
		expect(p.parse("Jagillo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Jag. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (smb)", () => {
		expect(p.parse("Adodolukuu'nosungiko 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ado. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (smb)", () => {
		expect(p.parse("Loowo 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Loo. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (smb)", () => {
		expect(p.parse("Joosuuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Joos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (smb)", () => {
		expect(p.parse("A'mwo Mido Mollomwalokwe 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Mido. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Isa (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (smb)", () => {
		expect(p.parse("Aisaiya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ais. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (smb)", () => {
		expect(p.parse("1 Samwel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (smb)", () => {
		expect(p.parse("2 Samwel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (smb)", () => {
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (smb)", () => {
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Kgs (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (smb)", () => {
		expect(p.parse("2 A'mwo Aguto Kig 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. A'mwo Aguto Kig 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (smb)", () => {
		expect(p.parse("2Kig. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (smb)", () => {
		expect(p.parse("1 Kuuguudo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kuuguudo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (smb)", () => {
		expect(p.parse("2 Kuuguudo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kuuguudo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (smb)", () => {
		expect(p.parse("1Kuu. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (smb)", () => {
		expect(p.parse("2Kuu. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ps (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (smb)", () => {
		expect(p.parse("Da'buukiyo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Da'bk. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (smb)", () => {
		expect(p.parse("Jeremaiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Hos (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (smb)", () => {
		expect(p.parse("Hooseya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Jonah (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (smb)", () => {
		expect(p.parse("Joona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jna. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (smb)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mka. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Zech (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (smb)", () => {
		expect(p.parse("Sekoraiya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Matt (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (smb)", () => {
		expect(p.parse("Matyuu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (smb)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (smb)", () => {
		expect(p.parse("Luuk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (smb)", () => {
		expect(p.parse("1Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (smb)", () => {
		expect(p.parse("2Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (smb)", () => {
		expect(p.parse("3 Joon 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (smb)", () => {
		expect(p.parse("1 Joon 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joon 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (smb)", () => {
		expect(p.parse("2 Joon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (smb)", () => {
		expect(p.parse("Joon 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (smb)", () => {
		expect(p.parse("Kuurotokwe 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Krt. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (smb)", () => {
		expect(p.parse("Room 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (smb)", () => {
		expect(p.parse("1 Koorin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koorin 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (smb)", () => {
		expect(p.parse("2 Koorin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koorin 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (smb)", () => {
		expect(p.parse("1Krn. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (smb)", () => {
		expect(p.parse("2Krn. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (smb)", () => {
		expect(p.parse("Kooloosi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kls. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (smb)", () => {
		expect(p.parse("Galesiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (smb)", () => {
		expect(p.parse("Efesos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (smb)", () => {
		expect(p.parse("Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (smb)", () => {
		expect(p.parse("1 Tesaloonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (smb)", () => {
		expect(p.parse("2 Tesaloonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (smb)", () => {
		expect(p.parse("1Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (smb)", () => {
		expect(p.parse("2Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (smb)", () => {
		expect(p.parse("1 Timooti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timooti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (smb)", () => {
		expect(p.parse("2 Timooti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timooti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (smb)", () => {
		expect(p.parse("1Tm. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (smb)", () => {
		expect(p.parse("2Tm. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (smb)", () => {
		expect(p.parse("Taitos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (smb)", () => {
		expect(p.parse("Filemoon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (smb)", () => {
		expect(p.parse("Hibruu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (smb)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jms. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (smb)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (smb)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (smb)", () => {
		expect(p.parse("1Pt. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (smb)", () => {
		expect(p.parse("2Pt. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (smb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (smb)", () => {
		expect(p.parse("Juut 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jt. 1:1").osis()).toEqual("Jude.1.1");
	});
});

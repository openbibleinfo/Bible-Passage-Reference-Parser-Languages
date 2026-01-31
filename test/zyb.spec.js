"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/zyb.js";

describe("Localized book Gen (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (zyb)", () => {
		expect(p.parse("Lizsij dih Gaihcij 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ldg 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (zyb)", () => {
		expect(p.parse("Ok Ngaihgiz 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ong 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Rev (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (zyb)", () => {
		expect(p.parse("Gihduz Hawj Vunz Rox 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ghv 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Ruth (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (zyb)", () => {
		expect(p.parse("Geiq Luqdwz 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lud 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Jonah (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (zyb)", () => {
		expect(p.parse("Yoznaz Saw 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yns 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Matt (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (zyb)", () => {
		expect(p.parse("Majdaiq Saw 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mds 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (zyb)", () => {
		expect(p.parse("Majgoj Saw 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mgs 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (zyb)", () => {
		expect(p.parse("Luqgyah Saw 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lgs 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (zyb)", () => {
		expect(p.parse("Yozhanq It 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yh1 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (zyb)", () => {
		expect(p.parse("Yozhanq Ngeih 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yh2 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (zyb)", () => {
		expect(p.parse("Yozhanq Sam 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yh3 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (zyb)", () => {
		expect(p.parse("Yozhanq Saw 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhs 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (zyb)", () => {
		expect(p.parse("Geiq Dwzbaijyienz 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dby 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (zyb)", () => {
		expect(p.parse("Lozmaj Saw 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lms 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (zyb)", () => {
		expect(p.parse("Gohlimzdoh It 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Go1 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (zyb)", () => {
		expect(p.parse("Gohlimzdoh Ngeih 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Go2 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (zyb)", () => {
		expect(p.parse("Gohlozsih Saw 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Gls 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (zyb)", () => {
		expect(p.parse("Gyahlahdaiq Saw 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gld 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (zyb)", () => {
		expect(p.parse("Hijfuzsoj Saw 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Hfs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (zyb)", () => {
		expect(p.parse("Feihlizbij Saw 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flb 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (zyb)", () => {
		expect(p.parse("Dezsajloznizgyah It 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("De1 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (zyb)", () => {
		expect(p.parse("Dezsajloznizgyah Ngeih 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("De2 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (zyb)", () => {
		expect(p.parse("Dizmohdaiq It 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Di1 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (zyb)", () => {
		expect(p.parse("Dizmohdaiq Ngeih 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Di2 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (zyb)", () => {
		expect(p.parse("Dizdoh Saw 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Dds 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (zyb)", () => {
		expect(p.parse("Feihliqmaenz Saw 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (zyb)", () => {
		expect(p.parse("Hihbwzlaiz Saw 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hbl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (zyb)", () => {
		expect(p.parse("Yajgoz Saw 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ygs 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (zyb)", () => {
		expect(p.parse("Bijdwz It 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Bd1 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (zyb)", () => {
		expect(p.parse("Bijdwz Ngeih 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Bd2 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (zyb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (zyb)", () => {
		expect(p.parse("Youzdaq Saw 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yds 1:1").osis()).toEqual("Jude.1.1");
	});
});

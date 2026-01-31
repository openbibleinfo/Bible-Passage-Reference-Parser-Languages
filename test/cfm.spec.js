"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cfm.js";

describe("Localized book Gen (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (cfm)", () => {
		expect(p.parse("Seemthawhnak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Seemtirnak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sempanhnak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Seem 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sem 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (cfm)", () => {
		expect(p.parse("Luatsuakhnak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Suahhlannak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Suahlannak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Luat 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Suah 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (cfm)", () => {
		expect(p.parse("Puithiam Hnaṭuannak 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tlangbawi Rianṭuan 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Suangbawi Laibu 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Tlang 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Pui 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Sua 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (cfm)", () => {
		expect(p.parse("Mipum Siarhnak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mipum Siarnak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mipun Siarnak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mipum 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mip 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (cfm)", () => {
		expect(p.parse("Ṭahhlapawl 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kahlate 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ṭahhla 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kah 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ṭah 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cfm)", () => {
		expect(p.parse("Chawngmopong 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Thupphuan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Thuphuan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chawng 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Thup 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (cfm)", () => {
		expect(p.parse("Daan Peksalnak 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Danpelehhnak 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Daannolhnak 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Daan 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Danp 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (cfm)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (cfm)", () => {
		expect(p.parse("Thukhantute 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thuṭhentule 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thuṭhentu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thuk 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Thuṭ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (cfm)", () => {
		expect(p.parse("Ruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (cfm)", () => {
		expect(p.parse("Isaiah 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isai 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (cfm)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (cfm)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (cfm)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (cfm)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (cfm)", () => {
		expect(p.parse("1 Siangphahrang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Siangpahrang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Kumpibawite 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Sian. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Siangphahrang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Siangpahrang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kumpibawite 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Sian. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (cfm)", () => {
		expect(p.parse("2 Siangphahrang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Siangpahrang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Kumpibawite 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Sian. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Siangphahrang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Siangpahrang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kumpibawite 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Sian. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (cfm)", () => {
		expect(p.parse("1Siang 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kum 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (cfm)", () => {
		expect(p.parse("2Siang 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kum 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (cfm)", () => {
		expect(p.parse("1 Sansiarhnakte 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Sansiarnak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 San. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sansiarhnakte 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sansiarnak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. San. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (cfm)", () => {
		expect(p.parse("2 Sansiarhnakte 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Sansiarnak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 San. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sansiarhnakte 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sansiarnak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. San. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (cfm)", () => {
		expect(p.parse("1San 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (cfm)", () => {
		expect(p.parse("2San 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (cfm)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (cfm)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (cfm)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (cfm)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (cfm)", () => {
		expect(p.parse("Saam Hlabu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Saam Labu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Saam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (cfm)", () => {
		expect(p.parse("Aanroling 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thufimte 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thufim 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Thuf 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Aan 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (cfm)", () => {
		expect(p.parse("Thureltu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thusimtu 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thur 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Thus 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (cfm)", () => {
		expect(p.parse("Solomon Ih Hlapawl 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solomon Hla 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solomon la 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sol 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (cfm)", () => {
		expect(p.parse("Jeremiah 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (cfm)", () => {
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (cfm)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (cfm)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (cfm)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (cfm)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (cfm)", () => {
		expect(p.parse("Obadiah 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (cfm)", () => {
		expect(p.parse("Jonah 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (cfm)", () => {
		expect(p.parse("Mikah 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (cfm)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (cfm)", () => {
		expect(p.parse("Habakkuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (cfm)", () => {
		expect(p.parse("Zefaniah 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zep 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (cfm)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (cfm)", () => {
		expect(p.parse("Zekhariah 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zec 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (cfm)", () => {
		expect(p.parse("Malakhi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cfm)", () => {
		expect(p.parse("Matthai 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mtt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cfm)", () => {
		expect(p.parse("Marka 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cfm)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cfm)", () => {
		expect(p.parse("1Joh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cfm)", () => {
		expect(p.parse("2Joh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cfm)", () => {
		expect(p.parse("3 Johan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jhn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Joh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cfm)", () => {
		expect(p.parse("1 Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cfm)", () => {
		expect(p.parse("2 Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cfm)", () => {
		expect(p.parse("Johan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cfm)", () => {
		expect(p.parse("Tirhthalahle 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tirhthlah 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nalangte 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tulsin 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dung 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tirh 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nal 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tul 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cfm)", () => {
		expect(p.parse("Rome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cfm)", () => {
		expect(p.parse("1 Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinth 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korin 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cfm)", () => {
		expect(p.parse("2 Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinth 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korin 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cfm)", () => {
		expect(p.parse("1Cor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cfm)", () => {
		expect(p.parse("2Cor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cfm)", () => {
		expect(p.parse("Kolossa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cfm)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galati 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cfm)", () => {
		expect(p.parse("Ephesi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesa 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cfm)", () => {
		expect(p.parse("Philippi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cfm)", () => {
		expect(p.parse("1 Thessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thesalon 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thesalon 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Thes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cfm)", () => {
		expect(p.parse("2 Thessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thesalon 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thesalon 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Thes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cfm)", () => {
		expect(p.parse("1Thes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1The 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cfm)", () => {
		expect(p.parse("2Thes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2The 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cfm)", () => {
		expect(p.parse("I Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cfm)", () => {
		expect(p.parse("1 Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timothi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cfm)", () => {
		expect(p.parse("2 Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timothi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cfm)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cfm)", () => {
		expect(p.parse("Titas 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tita 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cfm)", () => {
		expect(p.parse("Philemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phim 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cfm)", () => {
		expect(p.parse("Hebrai 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cfm)", () => {
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("James 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jeim 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jam 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cfm)", () => {
		expect(p.parse("1 Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cfm)", () => {
		expect(p.parse("2 Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cfm)", () => {
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pit 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cfm)", () => {
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pit 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cfm)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cfm)", () => {
		expect(p.parse("Juda Cakuat 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jude 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ewe.js";

describe("Localized book Gen (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ewe)", () => {
		expect(p.parse("1 Mose 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mos I, 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mose I 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mo I 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("1Mo 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ewe)", () => {
		expect(p.parse("Mos II, 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mose II 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2 Mose 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Mo II 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("2Mo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ewe)", () => {
		expect(p.parse("Mos III, 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mose III 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3 Mose 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Mo III 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("3Mo 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ewe)", () => {
		expect(p.parse("Mos IV, 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mose IV 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4 Mose 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mo IV 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("4Mo 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (ewe)", () => {
		expect(p.parse("Eklesiastiko 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (ewe)", () => {
		expect(p.parse("Salomo ƒe Nunya 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Nya 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ewe)", () => {
		expect(p.parse("Konyifahawo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Konyi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kony 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kon 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ewe)", () => {
		expect(p.parse("Nyaɖeɖefia, si woɖe fia Yohanes 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nyaɖeɖefia 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nyaɖ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Nyd 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ewe)", () => {
		expect(p.parse("5 Mose 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mos V, 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mose V 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Mo V 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("5Mo 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ewe)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ewe)", () => {
		expect(p.parse("Ʋɔnudrɔ̃lawo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ɖelawo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ɖel 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ʋɔn 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ewe)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ewe)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ewe)", () => {
		expect(p.parse("Samuel I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sam I, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Sam I 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ewe)", () => {
		expect(p.parse("Samuel II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sam II, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Sam II 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ewe)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ewe)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ewe)", () => {
		expect(p.parse("Fiawo I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fia I, 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Fia I 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Fi 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ewe)", () => {
		expect(p.parse("Fiawo II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Fia II, 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Fia II 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Fi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ewe)", () => {
		expect(p.parse("1 Fiawo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Fiawo 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ewe)", () => {
		expect(p.parse("2 Fiawo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Fiawo 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ewe)", () => {
		expect(p.parse("Kronika I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kron I, 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Kron I 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1Kr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ewe)", () => {
		expect(p.parse("Kronika II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kron II, 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Kron II 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Kr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ewe)", () => {
		expect(p.parse("1 Kronika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronika 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ewe)", () => {
		expect(p.parse("2 Kronika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronika 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ewe)", () => {
		expect(p.parse("Ezra ƒe Agbalẽ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ewe)", () => {
		expect(p.parse("Nexemya ƒe Agbalẽ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nexemya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nex 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ewe)", () => {
		expect(p.parse("Hiob ƒe Agbalẽ 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hiob 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Hio 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ewe)", () => {
		expect(p.parse("Psalmowo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ewe)", () => {
		expect(p.parse("Salomo ƒe Lododowo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Lododowo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Lod 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ewe)", () => {
		expect(p.parse("Nyagblɔla Salomo 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nyagblɔla 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nyagb 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nya 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Nyg 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ewe)", () => {
		expect(p.parse("Hawo ƒe ha 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Hawo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Haw 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ewe)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yeremya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ewe)", () => {
		expect(p.parse("Hezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Xezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hez 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Xez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ewe)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ewe)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ewe)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yol 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ewe)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ewe)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ewe)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ewe)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mixa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ewe)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naxum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nax 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ewe)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xabakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ewe)", () => {
		expect(p.parse("Zefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ewe)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ewe)", () => {
		expect(p.parse("Zaxarya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zax 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ewe)", () => {
		expect(p.parse("Maleaxi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ewe)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ewe)", () => {
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ewe)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ewe)", () => {
		expect(p.parse("Yohanes ƒe Agbalẽ Gbatɔ̃ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yohanes I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yoh I, 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yoh I 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ewe)", () => {
		expect(p.parse("Yohanes ƒe Agbalẽ Evelia 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yohanes II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yoh II, 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yoh II 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ewe)", () => {
		expect(p.parse("Yohanes ƒe Agbalẽ Atɔ̃lia 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yohanes III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yoh III, 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yoh III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ewe)", () => {
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ewe)", () => {
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ewe)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ewe)", () => {
		expect(p.parse("Amedɔdɔawo ƒe Dɔwɔwɔwo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dɔwɔwɔwo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dɔw 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Dɔ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ewe)", () => {
		expect(p.parse("Romatɔwo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ewe)", () => {
		expect(p.parse("Korintotɔwo I, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Korintotɔwo I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor I, 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Kor I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ewe)", () => {
		expect(p.parse("Korintotɔwo II, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Korintotɔwo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor II, 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Kor II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ewe)", () => {
		expect(p.parse("1 Korintotɔwo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintotɔwo 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ewe)", () => {
		expect(p.parse("2 Korintotɔwo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintotɔwo 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ewe)", () => {
		expect(p.parse("Kolosetɔwo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ewe)", () => {
		expect(p.parse("Galatiatɔwo 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ewe)", () => {
		expect(p.parse("Efesotɔwo 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ewe)", () => {
		expect(p.parse("Filipitɔwo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ewe)", () => {
		expect(p.parse("Tesalonikatɔwo I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes I, 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Tes I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ewe)", () => {
		expect(p.parse("Tesalonikatɔwo II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes II, 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Tes II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ewe)", () => {
		expect(p.parse("1 Tesalonikatɔwo 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikatɔwo 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ewe)", () => {
		expect(p.parse("2 Tesalonikatɔwo 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikatɔwo 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ewe)", () => {
		expect(p.parse("Timoteo I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tim I, 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Tim I 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ewe)", () => {
		expect(p.parse("Timoteo II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tim II, 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Tim II 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ewe)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ewe)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ewe)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ewe)", () => {
		expect(p.parse("Paulo ƒe Agbalẽ si woŋlo ɖo ɖe Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ewe)", () => {
		expect(p.parse("Agbalẽ si woŋlo ɖo ɖe Hebritɔwo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebritɔwo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ewe)", () => {
		expect(p.parse("Yakobo ƒe Agbalẽ 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ewe)", () => {
		expect(p.parse("Petro ƒe Agbalẽ Gbatɔ̃ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petro I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pet I, 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Pet I 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ewe)", () => {
		expect(p.parse("Petro ƒe Agbalẽ Evelia 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petro II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pet II, 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Pet II 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ewe)", () => {
		expect(p.parse("1 Petro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ewe)", () => {
		expect(p.parse("2 Petro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ewe)", () => {
		expect(p.parse("Yuda ƒe Agbalẽ 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (ewe)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (ewe)", () => {
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (ewe)", () => {
		expect(p.parse("Barux 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (ewe)", () => {
		expect(p.parse("1Makabeowo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("Mak I, 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (ewe)", () => {
		expect(p.parse("2Makabeowo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("Mak II, 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (ewe)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ewe)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});

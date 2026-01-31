"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/mas.js";

describe("Localized book Gen (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (mas)", () => {
		expect(p.parse("Enkiterunoto 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Enk 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (mas)", () => {
		expect(p.parse("Enaidurra 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ena 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (mas)", () => {
		expect(p.parse("Ilawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ilaw 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (mas)", () => {
		expect(p.parse("Enkikena 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Enki 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (mas)", () => {
		expect(p.parse("Sirak 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (mas)", () => {
		expect(p.parse("Eng'eno nagut e Solomon 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Eng'e 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (mas)", () => {
		expect(p.parse("Nkishirat 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Nkish 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (mas)", () => {
		expect(p.parse("Embolunoto 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Emb 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (mas)", () => {
		expect(p.parse("Enkigilata oo Nkitanapat 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Enkig 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (mas)", () => {
		expect(p.parse("Yoshua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (mas)", () => {
		expect(p.parse("Ilarishak 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ilari 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (mas)", () => {
		expect(p.parse("Rusi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (mas)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (mas)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (mas)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (mas)", () => {
		expect(p.parse("1 Ilaiguanak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Illaig 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ilai 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ilaiguanak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Illaig 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ilai 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ilaiguanak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Illaig 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Ilai 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (mas)", () => {
		expect(p.parse("2 Ilaiguanak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Illaig 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ilai 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ilaiguanak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Illaig 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ilai 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ilaiguanak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Illaig 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Ilai 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (mas)", () => {
		expect(p.parse("1 Interpen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Intepen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Int 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Interpen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Intepen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Int 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Interpen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Intepen 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Int 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (mas)", () => {
		expect(p.parse("2 Intepen 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Int 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Intepen 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Int 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Intepen 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Int 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (mas)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (mas)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (mas)", () => {
		expect(p.parse("Esta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (mas)", () => {
		expect(p.parse("Yoab 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Yoa 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (mas)", () => {
		expect(p.parse("Olkerempe le Nkai 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Olke 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Olk 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (mas)", () => {
		expect(p.parse("Ndung'eta e Rashe 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ndung 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (mas)", () => {
		expect(p.parse("Olaikooni 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Olaik 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (mas)", () => {
		expect(p.parse("Osinkolio le Solomon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Osink 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (mas)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (mas)", () => {
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (mas)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (mas)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (mas)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (mas)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (mas)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (mas)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (mas)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (mas)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (mas)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haba 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (mas)", () => {
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sef 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (mas)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (mas)", () => {
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (mas)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (mas)", () => {
		expect(p.parse("Matayos 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (mas)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (mas)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (mas)", () => {
		expect(p.parse("Empalai E Uni E Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yhn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (mas)", () => {
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yhn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Yhn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (mas)", () => {
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yhn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Yhn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (mas)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yhn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (mas)", () => {
		expect(p.parse("Nkitobirat 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Iasat 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Iat 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (mas)", () => {
		expect(p.parse("Romayoi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("iRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Irm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (mas)", () => {
		expect(p.parse("1 Ilkorintioi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ilkorintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ilkorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ilkor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ilkorintioi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ilkorintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ilkorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ilkor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ilkorintioi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ilkorintio 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ilkorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Ilkor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (mas)", () => {
		expect(p.parse("2 Ilkorintioi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ilkorintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ilkorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ilkor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ilkorintioi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ilkorintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ilkorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ilkor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ilkorintioi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ilkorintio 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ilkorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Ilkor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (mas)", () => {
		expect(p.parse("Ilkolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ilkol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (mas)", () => {
		expect(p.parse("Ilgalatai 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ilgalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ilg 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (mas)", () => {
		expect(p.parse("Ile Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesioi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (mas)", () => {
		expect(p.parse("Ilfilipesioi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ilfilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ilf 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (mas)", () => {
		expect(p.parse("1 Iltesalonikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ilsesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ils 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Iltesalonikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ilsesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ils 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Iltesalonikes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ilsesalonike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Ils 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (mas)", () => {
		expect(p.parse("2 Iltesalonikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ilsesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ils 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Iltesalonikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ilsesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ils 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Iltesalonikes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ilsesalonike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Ils 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (mas)", () => {
		expect(p.parse("1 Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteos 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (mas)", () => {
		expect(p.parse("2 Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteos 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (mas)", () => {
		expect(p.parse("Titos 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (mas)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (mas)", () => {
		expect(p.parse("Ilhebrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ilhebrayoi 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ilbrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ilb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ilh 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (mas)", () => {
		expect(p.parse("Yakobos 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yko 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (mas)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Petros 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (mas)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Petros 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (mas)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yd 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (mas)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (mas)", () => {
		expect(p.parse("Yudit 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yud 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (mas)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (mas)", () => {
		expect(p.parse("1 Ilmakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Ilmakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Ilmakabayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("I. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (mas)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (mas)", () => {
		expect(p.parse("2 Ilmakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Ilmakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Ilmakabayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("II. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});

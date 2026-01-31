"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tui.js";

describe("Localized book Gen (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tui)", () => {
		expect(p.parse("Ti§i§gi Were 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tĩĩgi Were 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ti. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tĩĩ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tui)", () => {
		expect(p.parse("Laage Go 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Laa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("La 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tui)", () => {
		expect(p.parse("Joñre Jar Lefid Wo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Joŋre Jar Lefid Wo 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Jo. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lef 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tui)", () => {
		expect(p.parse("Keege Jar Israyel Wo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kee. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kee 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tui)", () => {
		expect(p.parse("Lawge Mani Jeremi Wo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lawge Mani Jermin Wo 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Law. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Law 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tui)", () => {
		expect(p.parse("Naage Nene 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Naage 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Naa 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tui)", () => {
		expect(p.parse("Dogge Jag Liñgi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dogge Jag Liŋgi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dog. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dog 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tui)", () => {
		expect(p.parse("Josuwe 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tui)", () => {
		expect(p.parse("Jar Car Kiida Wo 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kii 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Ja 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tui)", () => {
		expect(p.parse("Rud 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Ru 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tui)", () => {
		expect(p.parse("Esayi 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esay 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tui)", () => {
		expect(p.parse("1 Samyel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samyel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tui)", () => {
		expect(p.parse("2 Samyel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samyel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tui)", () => {
		expect(p.parse("1 Wañre Wo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Waŋre Wo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Wañ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Waŋ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wañre Wo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Waŋre Wo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Wañ. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Waŋ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tui)", () => {
		expect(p.parse("2 Wañre Wo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Waŋre Wo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Wañ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Waŋ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wañre Wo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Waŋre Wo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Wañ. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Waŋ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tui)", () => {
		expect(p.parse("1 Kronig 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kro. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kro 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronig 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kro. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kro 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tui)", () => {
		expect(p.parse("2 Kronig 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kro. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kro 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronig 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kro. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kro 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tui)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tui)", () => {
		expect(p.parse("Nehemi 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Ne 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tui)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tui)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tui)", () => {
		expect(p.parse("Jag Joçoç Wo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Jag Jõõ Wo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Jag. 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Jõõ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tui)", () => {
		expect(p.parse("Eklesiyaste 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ek 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tui)", () => {
		expect(p.parse("Siñ ma de dañ siñn wo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Siŋ Ma De Daŋ Siŋn Wo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sds 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Si 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tui)", () => {
		expect(p.parse("Siñ Wora 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Siŋ Wora 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Siñ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Siŋ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tui)", () => {
		expect(p.parse("Jermi 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tui)", () => {
		expect(p.parse("Esekiyel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ese 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Es 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tui)", () => {
		expect(p.parse("Danyel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Da 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tui)", () => {
		expect(p.parse("Ose 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tui)", () => {
		expect(p.parse("Jowel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jow 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tui)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tui)", () => {
		expect(p.parse("Abdiyas 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ab 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tui)", () => {
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jo 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tui)", () => {
		expect(p.parse("Mise 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mis 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tui)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Na 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tui)", () => {
		expect(p.parse("Habakug 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ha 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tui)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("So 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tui)", () => {
		expect(p.parse("Aje 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aj 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tui)", () => {
		expect(p.parse("Sakari 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sa 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tui)", () => {
		expect(p.parse("Malasi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Ma. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tui)", () => {
		expect(p.parse("Matiye 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tui)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tui)", () => {
		expect(p.parse("Lug 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tui)", () => {
		expect(p.parse("1 Jañ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ja 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jañ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jaŋ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ja 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tui)", () => {
		expect(p.parse("2 Jañ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ja 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jañ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jaŋ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ja 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tui)", () => {
		expect(p.parse("3 Jañ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ja 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jañ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jaŋ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ja 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tui)", () => {
		expect(p.parse("Jañ 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jaŋ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tui)", () => {
		expect(p.parse("Joñre 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Joŋre 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Joñ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Joŋ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tui)", () => {
		expect(p.parse("Rom Wo 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tui)", () => {
		expect(p.parse("1 Korente Wo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korente Wo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tui)", () => {
		expect(p.parse("2 Korente Wo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korente Wo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tui)", () => {
		expect(p.parse("Kolos Wo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tui)", () => {
		expect(p.parse("Galad Wo 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tui)", () => {
		expect(p.parse("Efes Wo 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tui)", () => {
		expect(p.parse("Filip Wo 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tui)", () => {
		expect(p.parse("1 Tesalonig Wo 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonig Wo 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tui)", () => {
		expect(p.parse("2 Tesalonig Wo 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonig Wo 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tui)", () => {
		expect(p.parse("1 Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tui)", () => {
		expect(p.parse("2 Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tui)", () => {
		expect(p.parse("Tid 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Ti 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tui)", () => {
		expect(p.parse("Filemoñ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemoŋ 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fi 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tui)", () => {
		expect(p.parse("Hebre Wo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tui)", () => {
		expect(p.parse("Jag 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tui)", () => {
		expect(p.parse("1 Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pi 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piyer 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pi 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tui)", () => {
		expect(p.parse("2 Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pi 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piyer 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pi 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tui)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tui)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kmb.js";

describe("Localized book Gen (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kmb)", () => {
		expect(p.parse("Dimatekenu 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kmb)", () => {
		expect(p.parse("Makatukilu 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kmb)", () => {
		expect(p.parse("Ijila 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kmb)", () => {
		expect(p.parse("Dialuilu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kmb)", () => {
		expect(p.parse("Kuditenda 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kmb)", () => {
		expect(p.parse("Dijingunuinu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kmb)", () => {
		expect(p.parse("Matendelelu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kmb)", () => {
		expect(p.parse("Josuué 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kmb)", () => {
		expect(p.parse("Afundixi 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kmb)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kmb)", () => {
		expect(p.parse("Izaía 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kmb)", () => {
		expect(p.parse("I Samuuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Samuuele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kmb)", () => {
		expect(p.parse("II Samuuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Samuuele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kmb)", () => {
		expect(p.parse("I Jisobha 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Jisobha 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kmb)", () => {
		expect(p.parse("II Jisobha 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Jisobha 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kmb)", () => {
		expect(p.parse("I Malunda 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. Malunda 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kmb)", () => {
		expect(p.parse("II Malunda 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. Malunda 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kmb)", () => {
		expect(p.parse("Ejidala 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kmb)", () => {
		expect(p.parse("Nehemiia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kmb)", () => {
		expect(p.parse("Estere 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kmb)", () => {
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kmb)", () => {
		expect(p.parse("Jisálamu 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kmb)", () => {
		expect(p.parse("Jisabhu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kmb)", () => {
		expect(p.parse("Ndongixi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kmb)", () => {
		expect(p.parse("Mukumbi ua Mikumbi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kmb)", () => {
		expect(p.parse("Jelemiia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kmb)", () => {
		expect(p.parse("Izekiiele 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kmb)", () => {
		expect(p.parse("Daniiele 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kmb)", () => {
		expect(p.parse("Hozeia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kmb)", () => {
		expect(p.parse("Jouele 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kmb)", () => {
		expect(p.parse("Amoji 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kmb)", () => {
		expect(p.parse("Obadiia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kmb)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kmb)", () => {
		expect(p.parse("Mikeia 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kmb)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kmb)", () => {
		expect(p.parse("Habakuke 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kmb)", () => {
		expect(p.parse("Sofoniia 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kmb)", () => {
		expect(p.parse("Ajeu 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kmb)", () => {
		expect(p.parse("Zakadiia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kmb)", () => {
		expect(p.parse("Malakiia 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kmb)", () => {
		expect(p.parse("Matesu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kmb)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kmb)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kmb)", () => {
		expect(p.parse("I Nzuá 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Nzuá 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kmb)", () => {
		expect(p.parse("II Nzuá 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Nzuá 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kmb)", () => {
		expect(p.parse("III Nzuá 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III. Nzuá 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kmb)", () => {
		expect(p.parse("Nzuá 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kmb)", () => {
		expect(p.parse("Jipoxolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kmb)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kmb)", () => {
		expect(p.parse("I Kolindo 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Kolindo 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kmb)", () => {
		expect(p.parse("II Kolindo 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Kolindo 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kmb)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kmb)", () => {
		expect(p.parse("Ngalásia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kmb)", () => {
		expect(p.parse("Efezo 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kmb)", () => {
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kmb)", () => {
		expect(p.parse("I Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kmb)", () => {
		expect(p.parse("II Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kmb)", () => {
		expect(p.parse("I Timote 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timote 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kmb)", () => {
		expect(p.parse("II Timote 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timote 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kmb)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kmb)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kmb)", () => {
		expect(p.parse("Jihebeleu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kmb)", () => {
		expect(p.parse("Tiiaku 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kmb)", () => {
		expect(p.parse("I Phetele 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Phetele 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kmb)", () => {
		expect(p.parse("II Phetele 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Phetele 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kmb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kmb)", () => {
		expect(p.parse("Juda 1:1").osis()).toEqual("Jude.1.1");
	});
});

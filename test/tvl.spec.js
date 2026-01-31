"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/tvl.js";

describe("Localized book Gen (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (tvl)", () => {
		expect(p.parse("Kenese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kene 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (tvl)", () => {
		expect(p.parse("Esoto 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eso 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (tvl)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (tvl)", () => {
		expect(p.parse("Numela 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nume 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (tvl)", () => {
		expect(p.parse("Tagiga A Ielemia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Tagi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (tvl)", () => {
		expect(p.parse("Fakaasiga 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Faka 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (tvl)", () => {
		expect(p.parse("Teutelonome 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Teu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (tvl)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (tvl)", () => {
		expect(p.parse("Famasino 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Fama 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (tvl)", () => {
		expect(p.parse("Luta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (tvl)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tvl)", () => {
		expect(p.parse("1 Samuelu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tvl)", () => {
		expect(p.parse("2 Samuelu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (tvl)", () => {
		expect(p.parse("1Samu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (tvl)", () => {
		expect(p.parse("2Samu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tvl)", () => {
		expect(p.parse("1Tupu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tvl)", () => {
		expect(p.parse("2Tupu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tvl)", () => {
		expect(p.parse("1 Nofoaiga Tupu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nofoaiga Tupu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tvl)", () => {
		expect(p.parse("2 Nofoaiga Tupu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nofoaiga Tupu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (tvl)", () => {
		expect(p.parse("1 Tupu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tupu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (tvl)", () => {
		expect(p.parse("2 Tupu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tupu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (tvl)", () => {
		expect(p.parse("1Ntupu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (tvl)", () => {
		expect(p.parse("2Ntupu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (tvl)", () => {
		expect(p.parse("Esela 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (tvl)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nee 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (tvl)", () => {
		expect(p.parse("Eseta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (tvl)", () => {
		expect(p.parse("Iopu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (tvl)", () => {
		expect(p.parse("Salamo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sala 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (tvl)", () => {
		expect(p.parse("Faataoto 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Faata 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (tvl)", () => {
		expect(p.parse("Failauga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Faila 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (tvl)", () => {
		expect(p.parse("Pese A Solomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Pese 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (tvl)", () => {
		expect(p.parse("Ielemia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iele 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (tvl)", () => {
		expect(p.parse("Esekielu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eseki 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (tvl)", () => {
		expect(p.parse("Tanielu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (tvl)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (tvl)", () => {
		expect(p.parse("Ioelu 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (tvl)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (tvl)", () => {
		expect(p.parse("Opetaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ope 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (tvl)", () => {
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (tvl)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (tvl)", () => {
		expect(p.parse("Nauma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nau 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (tvl)", () => {
		expect(p.parse("Sapakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Sapa 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (tvl)", () => {
		expect(p.parse("Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sefa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (tvl)", () => {
		expect(p.parse("Hakai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haka 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (tvl)", () => {
		expect(p.parse("Sakalia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Saka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (tvl)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (tvl)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (tvl)", () => {
		expect(p.parse("Maleko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Male 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (tvl)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tvl)", () => {
		expect(p.parse("1Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tvl)", () => {
		expect(p.parse("2Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (tvl)", () => {
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (tvl)", () => {
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (tvl)", () => {
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (tvl)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (tvl)", () => {
		expect(p.parse("Galuega 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Galu 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (tvl)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tvl)", () => {
		expect(p.parse("1 Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tvl)", () => {
		expect(p.parse("2 Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (tvl)", () => {
		expect(p.parse("1Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (tvl)", () => {
		expect(p.parse("2Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (tvl)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (tvl)", () => {
		expect(p.parse("Kalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kala 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (tvl)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (tvl)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tvl)", () => {
		expect(p.parse("1 Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tvl)", () => {
		expect(p.parse("2 Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (tvl)", () => {
		expect(p.parse("1Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (tvl)", () => {
		expect(p.parse("2Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tvl)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tvl)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (tvl)", () => {
		expect(p.parse("1Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (tvl)", () => {
		expect(p.parse("2Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (tvl)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (tvl)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("File 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (tvl)", () => {
		expect(p.parse("Epelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Epe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (tvl)", () => {
		expect(p.parse("Iakopo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tvl)", () => {
		expect(p.parse("1 Petelu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petelu 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tvl)", () => {
		expect(p.parse("2 Petelu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petelu 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (tvl)", () => {
		expect(p.parse("1Pete 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (tvl)", () => {
		expect(p.parse("2Pete 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (tvl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (tvl)", () => {
		expect(p.parse("Iuta 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rar.js";

describe("Localized book Gen (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rar)", () => {
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gene 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rar)", () => {
		expect(p.parse("Exodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rar)", () => {
		expect(p.parse("Levitiku 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rar)", () => {
		expect(p.parse("Numero 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nume 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rar)", () => {
		expect(p.parse("Te Aue A Ieremia 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Aue 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rar)", () => {
		expect(p.parse("Apokalupo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rar)", () => {
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rar)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iosu 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rar)", () => {
		expect(p.parse("Te Au Akava 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Aka 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rar)", () => {
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rar)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rar)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samu 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rar)", () => {
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samu 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rar)", () => {
		expect(p.parse("1 Ariki 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Ari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ariki 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ari 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rar)", () => {
		expect(p.parse("2 Ariki 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Ari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ariki 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ari 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rar)", () => {
		expect(p.parse("1 Paraleipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Para 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paraleipomeno 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Para 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rar)", () => {
		expect(p.parse("2 Paraleipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Para 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paraleipomeno 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Para 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rar)", () => {
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rar)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rar)", () => {
		expect(p.parse("Esetera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Esete 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rar)", () => {
		expect(p.parse("Iobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rar)", () => {
		expect(p.parse("Salamo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sala 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rar)", () => {
		expect(p.parse("Maseli 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Mase 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rar)", () => {
		expect(p.parse("Koheleta 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohe 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rar)", () => {
		expect(p.parse("Te Imene A Solomona 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Ime 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rar)", () => {
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Iere 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rar)", () => {
		expect(p.parse("Ezekiela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rar)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dani 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rar)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hose 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rar)", () => {
		expect(p.parse("Ioela 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rar)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rar)", () => {
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rar)", () => {
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rar)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rar)", () => {
		expect(p.parse("Nahuma 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rar)", () => {
		expect(p.parse("Habakuka 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Haba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rar)", () => {
		expect(p.parse("Zephania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zepha 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rar)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Haga 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rar)", () => {
		expect(p.parse("Zekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zeka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rar)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rar)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mātaio 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mata 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Māt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rar)", () => {
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Māreko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mare 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mār 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rar)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rar)", () => {
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rar)", () => {
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rar)", () => {
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rar)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rar)", () => {
		expect(p.parse("'Anga'anga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Angaanga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Anga 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rar)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rōma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rōm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rar)", () => {
		expect(p.parse("1 Korinetia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kōrīnētia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kōr 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinetia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kōrīnētia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kōr 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rar)", () => {
		expect(p.parse("2 Korinetia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kōrīnētia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kōr 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinetia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kōrīnētia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kōr 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rar)", () => {
		expect(p.parse("Kolosa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rar)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gala 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rar)", () => {
		expect(p.parse("Ephesia 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ephe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rar)", () => {
		expect(p.parse("Philipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phili 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Phil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rar)", () => {
		expect(p.parse("1 Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalōnia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesa 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalōnia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesa 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rar)", () => {
		expect(p.parse("2 Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalōnia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesa 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalōnia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesa 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rar)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timōteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timōteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rar)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timōteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timōteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rar)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rar)", () => {
		expect(p.parse("Philemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phile 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Phlm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rar)", () => {
		expect(p.parse("Ebera 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rar)", () => {
		expect(p.parse("Iakobo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rar)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pete 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pete 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rar)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pete 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pete 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rar)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rar)", () => {
		expect(p.parse("Iuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

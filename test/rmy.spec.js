"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/rmy.js";

describe("Localized book Gen (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (rmy)", () => {
		expect(p.parse("Англунимос 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Англунимо 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jenesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Кэздэто 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Genesa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jen 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Анг 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Кд 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (rmy)", () => {
		expect(p.parse("Eksodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exodul 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exod. 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ek 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (rmy)", () => {
		expect(p.parse("Levetiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (rmy)", () => {
		expect(p.parse("Numeros 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (rmy)", () => {
		expect(p.parse("Lamentasiones 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Roimata 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Roim. 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lm 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (rmy)", () => {
		expect(p.parse("Apokalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sîkadimos 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sikavimos 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sikav 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apok 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Sîk. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (rmy)", () => {
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deutronomul 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (rmy)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Josue 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ios. 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (rmy)", () => {
		expect(p.parse("Krisînitorea 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jueses 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kris. 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jue 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (rmy)", () => {
		expect(p.parse("Руфь 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Рут 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (rmy)", () => {
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is. 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rmy)", () => {
		expect(p.parse("1 Samuelohko 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuelohko 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. S 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rmy)", () => {
		expect(p.parse("2 Samuelohko 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuelohko 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. S 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (rmy)", () => {
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (rmy)", () => {
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rmy)", () => {
		expect(p.parse("1 Thagarengo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Relles 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Thagarengo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Relles 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. R 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rmy)", () => {
		expect(p.parse("2 Thagarengo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Relles 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Thagarengo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Relles 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. R 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (rmy)", () => {
		expect(p.parse("1Thag. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (rmy)", () => {
		expect(p.parse("2Thag. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rmy)", () => {
		expect(p.parse("1 Kroničengo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronikas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kr 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kroničengo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikas 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kr 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rmy)", () => {
		expect(p.parse("2 Kroničengo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronikas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kr 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kroničengo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kr 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (rmy)", () => {
		expect(p.parse("1Kron. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (rmy)", () => {
		expect(p.parse("2Kron. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (rmy)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (rmy)", () => {
		expect(p.parse("Nejemias 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neem. 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nej 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (rmy)", () => {
		expect(p.parse("Estera 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (rmy)", () => {
		expect(p.parse("Iov 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (rmy)", () => {
		expect(p.parse("Psalmea 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalmo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmos 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (rmy)", () => {
		expect(p.parse("Proverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Le Pilde 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pilde 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pr 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (rmy)", () => {
		expect(p.parse("Eklesiastes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Eclesaiato 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecl. 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (rmy)", () => {
		expect(p.parse("Dilabaimos Le Dilibaimatăngo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kantares 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Dilab. 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Knt 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (rmy)", () => {
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ier. 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (rmy)", () => {
		expect(p.parse("Ezechiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezec. 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (rmy)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (rmy)", () => {
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (rmy)", () => {
		expect(p.parse("Ioel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (rmy)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (rmy)", () => {
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad. 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (rmy)", () => {
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Иона 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (rmy)", () => {
		expect(p.parse("Mikeas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (rmy)", () => {
		expect(p.parse("Najum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naxum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nax. 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naj 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (rmy)", () => {
		expect(p.parse("Jabakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xabakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Xab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Jab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (rmy)", () => {
		expect(p.parse("Sofonias 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Çefania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Çef. 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (rmy)", () => {
		expect(p.parse("Jageo 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Xag. 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Jag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (rmy)", () => {
		expect(p.parse("Zakarias 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaxaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zax. 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (rmy)", () => {
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Maleaxi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (rmy)", () => {
		expect(p.parse("Matei 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (rmy)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marco 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (rmy)", () => {
		expect(p.parse("Лукастар 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лукатар 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Лк 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rmy)", () => {
		expect(p.parse("1Ioan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Jono 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rmy)", () => {
		expect(p.parse("2Ioan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Jono 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (rmy)", () => {
		expect(p.parse("3 Ioanohko 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jono 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ioan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jono 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (rmy)", () => {
		expect(p.parse("1 Ioanohko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioanohko 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jono 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (rmy)", () => {
		expect(p.parse("2 Ioanohko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioanohko 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jono 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (rmy)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jono 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (rmy)", () => {
		expect(p.parse("Kărdimata Le Apostolengă 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostole 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apostoli 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Рындоря 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Apost 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Echos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kărd. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Бути 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Рынд 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ech 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (rmy)", () => {
		expect(p.parse("Romanuri 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romaia 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Roman 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rmy)", () => {
		expect(p.parse("1 Korintianuri 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintenea 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintianuri 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintenea 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rmy)", () => {
		expect(p.parse("2 Korintianuri 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintenea 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintianuri 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintenea 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (rmy)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (rmy)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (rmy)", () => {
		expect(p.parse("Kolosianuri 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolosenea 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolos 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kols 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (rmy)", () => {
		expect(p.parse("Galatenea 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatian 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Galatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gl 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (rmy)", () => {
		expect(p.parse("Efesenea 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesian 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efes 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efs 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (rmy)", () => {
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipenea 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipian 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filip 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rmy)", () => {
		expect(p.parse("1 Tesalonisianuri 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesaloničenea 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesl 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisianuri 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesaloničenea 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonisense 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesl 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rmy)", () => {
		expect(p.parse("2 Tesalonisianuri 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesaloničenea 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesl 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisianuri 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesaloničenea 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonisense 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesl 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (rmy)", () => {
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (rmy)", () => {
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rmy)", () => {
		expect(p.parse("1 Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotei 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rmy)", () => {
		expect(p.parse("2 Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotei 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (rmy)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (rmy)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (rmy)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (rmy)", () => {
		expect(p.parse("Filimono 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filim. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (rmy)", () => {
		expect(p.parse("Židovuri 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebreos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Evreia 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Židov 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Evr. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ebr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (rmy)", () => {
		expect(p.parse("Iakovohko 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iak. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rmy)", () => {
		expect(p.parse("1 Petrohko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrohko 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petri 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rmy)", () => {
		expect(p.parse("2 Petrohko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrohko 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petri 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (rmy)", () => {
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (rmy)", () => {
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (rmy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (rmy)", () => {
		expect(p.parse("Iudahko 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Iuda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

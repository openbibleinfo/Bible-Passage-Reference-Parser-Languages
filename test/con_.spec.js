"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/con_.js";

describe("Localized book Gen (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Gen (con)", () => {
		expect(p.parse("Génesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Exod (con)", () => {
		expect(p.parse("Éxodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Lev (con)", () => {
		expect(p.parse("Levítico 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lv 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Num (con)", () => {
		expect(p.parse("Números 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Rev (con)", () => {
		expect(p.parse("Canjaen'cho 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Deut (con)", () => {
		expect(p.parse("Deuteronomio 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Dt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Josh (con)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Judg (con)", () => {
		expect(p.parse("Jueces 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jc 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Ruth (con)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rt 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Isa (con)", () => {
		expect(p.parse("Isaías 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Sam (con)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sm 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sm 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Sam (con)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sm 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sm 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Kgs (con)", () => {
		expect(p.parse("1 Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Re 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Reyes 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Re 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Kgs (con)", () => {
		expect(p.parse("2 Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Re 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Reyes 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Re 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Ezra (con)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Neh (con)", () => {
		expect(p.parse("Nehemías 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Job (con)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Ps (con)", () => {
		expect(p.parse("Salmos 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Prov (con)", () => {
		expect(p.parse("Proverbios 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Jer (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Jer (con)", () => {
		expect(p.parse("Jeremías 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Dan (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Dan (con)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Hos (con)", () => {
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Joel (con)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Jol 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Amos (con)", () => {
		expect(p.parse("Amós 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Jonah (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Jonah (con)", () => {
		expect(p.parse("Jonás 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Mic (con)", () => {
		expect(p.parse("Miqueas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miq 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Zech (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Zech (con)", () => {
		expect(p.parse("Zacarías 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Mal (con)", () => {
		expect(p.parse("Malaquías 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Matt (con)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Mark (con)", () => {
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Luke (con)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1John (con)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2John (con)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 3John (con)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: John (con)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Acts (con)", () => {
		expect(p.parse("Tson'fa'cho 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tson 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Rom (con)", () => {
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Cor (con)", () => {
		expect(p.parse("1 Corinto'su 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinto'su 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Cor (con)", () => {
		expect(p.parse("2 Corinto'su 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinto'su 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Col (con)", () => {
		expect(p.parse("Colosa'su 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Gal (con)", () => {
		expect(p.parse("Galacia'su 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Eph (con)", () => {
		expect(p.parse("Efeso'su 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Phil (con)", () => {
		expect(p.parse("Filipo'su 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Thess (con)", () => {
		expect(p.parse("1 Tesalónica'su 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalónica'su 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Thess (con)", () => {
		expect(p.parse("2 Tesalónica'su 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalónica'su 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Tim (con)", () => {
		expect(p.parse("1 Timoteoga 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteoga 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Tim (con)", () => {
		expect(p.parse("2 Timoteoga 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteoga 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Titus (con)", () => {
		expect(p.parse("Titonga 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Phlm (con)", () => {
		expect(p.parse("Filemónga 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Heb (con)", () => {
		expect(p.parse("Hebreo'su 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Jas (con)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 1Pet (con)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: 2Pet (con)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book: Jude (con)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (con)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({"book_alone_strategy":"ignore","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona"});
	});
	it("should handle book ranges (con)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Juan - 3 Juan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Juan – 3 Juan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Juan — 3 Juan").osis()).toEqual("1John.1-3John.1");
	});
});

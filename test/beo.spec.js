"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/beo.js";

describe("Localized book Gen (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (beo)", () => {
		expect(p.parse("Mui 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (beo)", () => {
		expect(p.parse("Gadili Asi 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (beo)", () => {
		expect(p.parse("Gobele Salasu 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (beo)", () => {
		expect(p.parse("Idisu 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (beo)", () => {
		expect(p.parse("Fofagini Disu 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Deut (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (beo)", () => {
		expect(p.parse("Mousese Ea Malasu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (beo)", () => {
		expect(p.parse("Yosiua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (beo)", () => {
		expect(p.parse("Bisisu 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (beo)", () => {
		expect(p.parse("Ludi 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (beo)", () => {
		expect(p.parse("Aisaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (beo)", () => {
		expect(p.parse("1 Sa:miuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sa:miuele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (beo)", () => {
		expect(p.parse("2 Sa:miuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sa:miuele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (beo)", () => {
		expect(p.parse("1 Hina 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hina 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (beo)", () => {
		expect(p.parse("2 Hina 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hina 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (beo)", () => {
		expect(p.parse("1 Hou Olelesu 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Hou Olelesu 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (beo)", () => {
		expect(p.parse("2 Hou Olelesu 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Hou Olelesu 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (beo)", () => {
		expect(p.parse("Esela 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (beo)", () => {
		expect(p.parse("Nihemaia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (beo)", () => {
		expect(p.parse("Eseda 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (beo)", () => {
		expect(p.parse("Yoube 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (beo)", () => {
		expect(p.parse("Gesami Hea:su 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (beo)", () => {
		expect(p.parse("Malasu 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (beo)", () => {
		expect(p.parse("Da:i Dione Dawa:i Olelesu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Rev (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (beo)", () => {
		expect(p.parse("Wamolegei Sia: Olelesu 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Olelesu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Song (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (beo)", () => {
		expect(p.parse("Soloumane ea Gesami 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (beo)", () => {
		expect(p.parse("Yelemaia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (beo)", () => {
		expect(p.parse("Isigiele 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (beo)", () => {
		expect(p.parse("Da:niele 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (beo)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (beo)", () => {
		expect(p.parse("Youele 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (beo)", () => {
		expect(p.parse("A:imose 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (beo)", () => {
		expect(p.parse("Oubadaia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (beo)", () => {
		expect(p.parse("Youna 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (beo)", () => {
		expect(p.parse("Maiga 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (beo)", () => {
		expect(p.parse("Na:ihame 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (beo)", () => {
		expect(p.parse("Ha:bagage 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (beo)", () => {
		expect(p.parse("Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (beo)", () => {
		expect(p.parse("Ha:ga:iai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (beo)", () => {
		expect(p.parse("Segalaia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (beo)", () => {
		expect(p.parse("Malagai 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (beo)", () => {
		expect(p.parse("Ma:diu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (beo)", () => {
		expect(p.parse("Maga 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (beo)", () => {
		expect(p.parse("Luge 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (beo)", () => {
		expect(p.parse("1 Yone 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yone 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (beo)", () => {
		expect(p.parse("Yone 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 2John (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (beo)", () => {
		expect(p.parse("2Yone 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (beo)", () => {
		expect(p.parse("3Yone 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book Acts (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (beo)", () => {
		expect(p.parse("Asunasi Dunu Ilia Hou 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (beo)", () => {
		expect(p.parse("Louma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (beo)", () => {
		expect(p.parse("1 Golidia 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Golidia 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (beo)", () => {
		expect(p.parse("2 Golidia 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Golidia 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (beo)", () => {
		expect(p.parse("Golosia 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (beo)", () => {
		expect(p.parse("Gala:isia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (beo)", () => {
		expect(p.parse("Efesase 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (beo)", () => {
		expect(p.parse("Filibai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (beo)", () => {
		expect(p.parse("1 Desalounia 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Desalounia 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (beo)", () => {
		expect(p.parse("2 Desalounia 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Desalounia 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (beo)", () => {
		expect(p.parse("1 Dimodi 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Dimodi 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (beo)", () => {
		expect(p.parse("2 Dimodi 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Dimodi 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (beo)", () => {
		expect(p.parse("Daidase 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (beo)", () => {
		expect(p.parse("Failimone 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (beo)", () => {
		expect(p.parse("Hibulu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (beo)", () => {
		expect(p.parse("Ya:mese 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (beo)", () => {
		expect(p.parse("1 Bida 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bida 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (beo)", () => {
		expect(p.parse("2 Bida 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bida 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (beo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (beo)", () => {
		expect(p.parse("Yude 1:1").osis()).toEqual("Jude.1.1");
	});
});

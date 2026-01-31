"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/lue.js";

describe("Localized book Gen (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (lue)", () => {
		expect(p.parse("Kuputuka 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kupu. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (lue)", () => {
		expect(p.parse("Kulovoka 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kulo. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (lue)", () => {
		expect(p.parse("Vyavalevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Levi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (lue)", () => {
		expect(p.parse("Kulava 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kula. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (lue)", () => {
		expect(p.parse("Lungungu 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lungu. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (lue)", () => {
		expect(p.parse("Kusoloka 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kusolola 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kuso. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kuso 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (lue)", () => {
		expect(p.parse("Luximbi Lwamucivali 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Luxi. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (lue)", () => {
		expect(p.parse("Yoxuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yoxu. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (lue)", () => {
		expect(p.parse("Vaka-kuyula 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Kuyu. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (lue)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (lue)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (lue)", () => {
		expect(p.parse("Samwe. 1, 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Samwele 1 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (lue)", () => {
		expect(p.parse("Samwe. 2, 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Samwele 2 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (lue)", () => {
		expect(p.parse("Vamyangana 1 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Vamya. 1, 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (lue)", () => {
		expect(p.parse("Vamyangana 2 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Vamya. 2, 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (lue)", () => {
		expect(p.parse("Mukanda Wamijimbu 1 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Miji. 1, 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (lue)", () => {
		expect(p.parse("Mukanda Wamijimbu 2 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Miji. 2, 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (lue)", () => {
		expect(p.parse("Ezela 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (lue)", () => {
		expect(p.parse("Nehemiah 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nehe. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (lue)", () => {
		expect(p.parse("Eseta 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ese. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (lue)", () => {
		expect(p.parse("Yopa 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (lue)", () => {
		expect(p.parse("Jisamu 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Samu 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (lue)", () => {
		expect(p.parse("Viximo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Vixi. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (lue)", () => {
		expect(p.parse("Muka-kwambulula 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kwambu. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (lue)", () => {
		expect(p.parse("Mwaso Wasolomone 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Mwaso. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (lue)", () => {
		expect(p.parse("Yelemiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yele. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (lue)", () => {
		expect(p.parse("Ezekele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezeke. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (lue)", () => {
		expect(p.parse("Ndanyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ndanye. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (lue)", () => {
		expect(p.parse("Hozeya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hoze. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (lue)", () => {
		expect(p.parse("Yowele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yowe. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (lue)", () => {
		expect(p.parse("Amose 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (lue)", () => {
		expect(p.parse("Ovaciya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ova. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (lue)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (lue)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (lue)", () => {
		expect(p.parse("Nahume 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahu. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (lue)", () => {
		expect(p.parse("Hambakuke 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hamba. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (lue)", () => {
		expect(p.parse("Zefwanyiya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefwa. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (lue)", () => {
		expect(p.parse("Hangai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (lue)", () => {
		expect(p.parse("Zekaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zeka. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (lue)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (lue)", () => {
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (lue)", () => {
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (lue)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lue)", () => {
		expect(p.parse("Wayowano 1 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Yowa. 1, 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lue)", () => {
		expect(p.parse("Wayowano 2 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Yowa. 2, 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (lue)", () => {
		expect(p.parse("Wayowano 3 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowano 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Yowa. 3, 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (lue)", () => {
		expect(p.parse("1 Yowano 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yowa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowano 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (lue)", () => {
		expect(p.parse("2 Yowano 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yowa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowano 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (lue)", () => {
		expect(p.parse("Yowano 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowa. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (lue)", () => {
		expect(p.parse("Vilinga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Vili. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Vili 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (lue)", () => {
		expect(p.parse("Wavaka-loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lue)", () => {
		expect(p.parse("1 Kolinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koli 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinde 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lue)", () => {
		expect(p.parse("2 Kolinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koli 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinde 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (lue)", () => {
		expect(p.parse("Wavaka-kolinde 1 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Koli. 1, 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (lue)", () => {
		expect(p.parse("Wavaka-kolinde 2 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Koli. 2, 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (lue)", () => {
		expect(p.parse("Wavaka-kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (lue)", () => {
		expect(p.parse("Wavaka-ngalexa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngalesha 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngale. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ngal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (lue)", () => {
		expect(p.parse("Wavaka-efwesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efwesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efwe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efwe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (lue)", () => {
		expect(p.parse("Wavaka-fwilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwili. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwili 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lue)", () => {
		expect(p.parse("1 Tesolonyika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teso 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesolonyika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teso 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lue)", () => {
		expect(p.parse("2 Tesolonyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teso 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesolonyika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teso 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (lue)", () => {
		expect(p.parse("Wavaka-tesolonyika 1 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Teso. 1, 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (lue)", () => {
		expect(p.parse("Wavaka-tesolonyika 2 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Teso. 2, 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lue)", () => {
		expect(p.parse("1 Chimoteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Chim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Chimoteu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Chim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lue)", () => {
		expect(p.parse("2 Chimoteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Chim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Chimoteu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Chim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (lue)", () => {
		expect(p.parse("Wacimoteu 1 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Cimo. 1, 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (lue)", () => {
		expect(p.parse("Wacimoteu 2 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Cimo. 2, 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (lue)", () => {
		expect(p.parse("1 Wacituse 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Chituse 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Chitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Citu. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (lue)", () => {
		expect(p.parse("1 Wafwilemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fwilemone 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fwile. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fwile 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (lue)", () => {
		expect(p.parse("Hepeleu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Mukanda 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepe. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepe 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (lue)", () => {
		expect(p.parse("Wayakova 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yakova 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lue)", () => {
		expect(p.parse("1 Petulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petulu 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lue)", () => {
		expect(p.parse("2 Petulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petulu 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (lue)", () => {
		expect(p.parse("Wapetulu 1 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Petu. 1, 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (lue)", () => {
		expect(p.parse("Wapetulu 2 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Petu. 2, 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (lue)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (lue)", () => {
		expect(p.parse("Wayuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
	});
});

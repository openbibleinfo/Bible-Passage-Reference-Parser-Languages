"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/igl.js";

describe("Localized book Gen (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (igl)", () => {
		expect(p.parse("Abakwane̩ 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (igl)", () => {
		expect(p.parse("Akwodufu 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Akwo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (igl)", () => {
		expect(p.parse("Abo Lifai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lif 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (igl)", () => {
		expect(p.parse("Ekaluka 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Eka 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (igl)", () => {
		expect(p.parse("Edinaku 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Edi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (igl)", () => {
		expect(p.parse("O̩la E̩bite 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("E̩bi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (igl)", () => {
		expect(p.parse("O̩lo̩da Eduwa Onukeji 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("O̩lo̩ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (igl)", () => {
		expect(p.parse("Jo̩shua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jo̩s 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (igl)", () => {
		expect(p.parse("Amakajo̩ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (igl)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (igl)", () => {
		expect(p.parse("Aizaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Aiz 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (igl)", () => {
		expect(p.parse("1 Samiue̩l 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samiue̩l 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (igl)", () => {
		expect(p.parse("2 Samiue̩l 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samiue̩l 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (igl)", () => {
		expect(p.parse("1 Amonu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Amo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amonu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Amo 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (igl)", () => {
		expect(p.parse("2 Amonu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Am 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Amonu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Am 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (igl)", () => {
		expect(p.parse("1 Iko Iko E̩wñ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Iko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iko Iko E̩wñ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iko 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (igl)", () => {
		expect(p.parse("2 Iko Iko E̩wn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Iko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iko Iko E̩wn 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Iko 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (igl)", () => {
		expect(p.parse("E̩zra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (igl)", () => {
		expect(p.parse("Nihe̩maya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nih 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (igl)", () => {
		expect(p.parse("E̩sta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (igl)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (igl)", () => {
		expect(p.parse("Eli Eko̩ DʼO̩jo̩ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Eli̩ 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (igl)", () => {
		expect(p.parse("Ita, Ita 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ita 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (igl)", () => {
		expect(p.parse("Ako̩la ñw Ujeju 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ako̩ 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (igl)", () => {
		expect(p.parse("Eli So̩lo̩mo̩n 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("So̩l 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (igl)", () => {
		expect(p.parse("Je̩re̩maya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Je̩r 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (igl)", () => {
		expect(p.parse("Izikie̩l 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Izi 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (igl)", () => {
		expect(p.parse("Danie̩l 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (igl)", () => {
		expect(p.parse("Hosiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (igl)", () => {
		expect(p.parse("Joe̩l 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (igl)", () => {
		expect(p.parse("Emo̩s 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (igl)", () => {
		expect(p.parse("O̩badaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("O̩ba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (igl)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (igl)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mai 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (igl)", () => {
		expect(p.parse("Nehum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (igl)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (igl)", () => {
		expect(p.parse("Ze̩fanaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Ze̩f 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (igl)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (igl)", () => {
		expect(p.parse("Ze̩karaya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Ze̩k 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (igl)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (igl)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (igl)", () => {
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (igl)", () => {
		expect(p.parse("Luku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (igl)", () => {
		expect(p.parse("1 Jo̩n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jo̩n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (igl)", () => {
		expect(p.parse("2 Jo̩n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jo̩n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (igl)", () => {
		expect(p.parse("3 Jo̩n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jo̩n 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (igl)", () => {
		expect(p.parse("Jo̩n 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (igl)", () => {
		expect(p.parse("E̩wñ kʼAme̩nukpuche̩ Che 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("E̩wñ 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (igl)", () => {
		expect(p.parse("Abo Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (igl)", () => {
		expect(p.parse("1 Abo Ko̩rint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko̩r 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abo Ko̩rint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko̩r 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (igl)", () => {
		expect(p.parse("2 Abo Ko̩rint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko̩r 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abo Ko̩rint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko̩r 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (igl)", () => {
		expect(p.parse("Abo Ko̩lo̩se 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ko̩l 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (igl)", () => {
		expect(p.parse("Abo Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (igl)", () => {
		expect(p.parse("Abo E̩fe̩sus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("E̩f 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (igl)", () => {
		expect(p.parse("Abo Filipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (igl)", () => {
		expect(p.parse("1 Te̩s 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te̩s 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (igl)", () => {
		expect(p.parse("2 Abo Te̩se̩lonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te̩s 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abo Te̩se̩lonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te̩s 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (igl)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (igl)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (igl)", () => {
		expect(p.parse("Taito̩s 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (igl)", () => {
		expect(p.parse("Filimo̩n 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fili 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (igl)", () => {
		expect(p.parse("Abo Hibru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (igl)", () => {
		expect(p.parse("Jeme̩s 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jem 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (igl)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (igl)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (igl)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (igl)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (igl)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jo̩n - 3 Jo̩n").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jo̩n – 3 Jo̩n").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Jo̩n — 3 Jo̩n").osis()).toEqual("1John.1-3John.1");
	});
});

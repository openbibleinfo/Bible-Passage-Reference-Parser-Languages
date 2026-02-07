"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ojb.js";

describe("Localized book Gen (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ojb)", () => {
		expect(p.parse("Cenisihs 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ᒉᓂᓯᔅ 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ojb)", () => {
		expect(p.parse("Ekihsatahs 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("ᐁᑭᓴᑕᔅ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Exo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ojb)", () => {
		expect(p.parse("Lipitikahs 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("ᓬᐃᐱᑎᑲᔅ 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ojb)", () => {
		expect(p.parse("Akintaahsonan 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ᐊᑭᑖᓱᓇᓐ 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ojb)", () => {
		expect(p.parse("Maanentamowin 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("ᒫᓀᑕᒧᐎᓐ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ojb)", () => {
		expect(p.parse("Kihkentamooshiwewin 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("ᑭᑫᑕᒨᔑᐌᐎᓐ 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Rev 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ojb)", () => {
		expect(p.parse("Tootaraanamii 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ᑑᑕᕒᐋᓇᒦ 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ojb)", () => {
		expect(p.parse("Caahshowaa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("ᒑᔓᐙ 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ojb)", () => {
		expect(p.parse("Onaahkonikek 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("ᐅᓈᑯᓂᑫᒃ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jdg 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ojb)", () => {
		expect(p.parse("Oroot 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("ᐅᕒᐆᑦ 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ojb)", () => {
		expect(p.parse("Aaiseya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ᐋᐃᓭᔭ 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ojb)", () => {
		expect(p.parse("1 Saamiyoo 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 ᓵᒥᔫ 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saamiyoo 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. ᓵᒥᔫ 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ojb)", () => {
		expect(p.parse("2 Saamiyoo 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 ᓵᒥᔫ 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saamiyoo 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. ᓵᒥᔫ 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ojb)", () => {
		expect(p.parse("1Sa 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ojb)", () => {
		expect(p.parse("2Sa 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ojb)", () => {
		expect(p.parse("1 Kihciokimaak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ᑭᒋᐅᑭᒫᒃ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Kihciokimaak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ᑭᒋᐅᑭᒫᒃ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ojb)", () => {
		expect(p.parse("2 Kihciokimaak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ᑭᒋᐅᑭᒫᒃ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Kihciokimaak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ᑭᒋᐅᑭᒫᒃ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ojb)", () => {
		expect(p.parse("1Ki 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ojb)", () => {
		expect(p.parse("2Ki 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Ezra (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ojb)", () => {
		expect(p.parse("Esara 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("ᐁᓴᕒᐊ 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ojb)", () => {
		expect(p.parse("Niiyamaaya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("ᓃᔭᒫᔭ 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ojb)", () => {
		expect(p.parse("Ehstar 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("ᐁᔅᑕᕒ 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ojb)", () => {
		expect(p.parse("Coop 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("ᒎᑉ 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ojb)", () => {
		expect(p.parse("Nikamonan 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ᓂᑲᒧᓇᓐ 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psa 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ojb)", () => {
		expect(p.parse("Kakiihtaawikiishwewinan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("ᑲᑮᑖᐎᑮᔗᐎᓇᓐ 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ojb)", () => {
		expect(p.parse("Kaakihkentaahsotc 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("ᑳᑭᑫᑖᓱᒡ 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ecc 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ojb)", () => {
		expect(p.parse("Swaalaman Onikamonan 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("ᔂᓬᐊᒪᓐ ᐅᓂᑲᒧᓇᓐ 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Sng 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ojb)", () => {
		expect(p.parse("Ceramaaya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("ᒉᕒᐊᒫᔭ 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ojb)", () => {
		expect(p.parse("Iisiihkiyoo 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("ᐄᓰᑭᔫ 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezk 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ojb)", () => {
		expect(p.parse("Taaniyoo 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("ᑖᓂᔫ 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ojb)", () => {
		expect(p.parse("Hosiiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ᐅᓰᔭ 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ojb)", () => {
		expect(p.parse("Coowel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("ᒎᐌᓬ 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ojb)", () => {
		expect(p.parse("Emahs 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ᐁᒪᔅ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ojb)", () => {
		expect(p.parse("Oopitaaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ᐆᐱᑖᔭ 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ojb)", () => {
		expect(p.parse("Coona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("ᒎᓇ 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ojb)", () => {
		expect(p.parse("Maaihka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mic 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("ᒫᐃᑲ 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ojb)", () => {
		expect(p.parse("Neham 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("ᓀᐊᒻ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ojb)", () => {
		expect(p.parse("Haapakahk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ᐋᐸᑲᒃ 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ojb)", () => {
		expect(p.parse("Sehpanaaya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zeph 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("ᓭᐸᓈᔭ 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ojb)", () => {
		expect(p.parse("Haakeaai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ᐋᑫᐋᐃ 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ojb)", () => {
		expect(p.parse("Sehkaraaya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("ᓭᑲᕒᐋᔭ 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zech 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ojb)", () => {
		expect(p.parse("Maalahkaai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("ᒫᓬᐊᑳᐃ 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ojb)", () => {
		expect(p.parse("Maahtiyo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("ᒫᑎᔪ 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ojb)", () => {
		expect(p.parse("Maarhk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("ᒫᕒᒃ 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ojb)", () => {
		expect(p.parse("Lok 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("ᓬᐅᒃ 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ojb)", () => {
		expect(p.parse("1Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ojb)", () => {
		expect(p.parse("2Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ojb)", () => {
		expect(p.parse("3 Cwaan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 ᒞᓐ 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ojb)", () => {
		expect(p.parse("1 Cwaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Cwaan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. ᒞᓐ 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ojb)", () => {
		expect(p.parse("2 Cwaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Cwaan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. ᒞᓐ 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ojb)", () => {
		expect(p.parse("Cwaan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jhn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("ᒞᓐ 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ojb)", () => {
		expect(p.parse("Ishihcikewinan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("ᐃᔑᒋᑫᐎᓇᓐ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Act 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ojb)", () => {
		expect(p.parse("Oroomanak 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("ᐅᕒᐆᒪᓇᒃ 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ojb)", () => {
		expect(p.parse("1 Karintiyanak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 ᑲᕒᐃᑎᔭᓇᒃ 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Karintiyanak 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. ᑲᕒᐃᑎᔭᓇᒃ 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ojb)", () => {
		expect(p.parse("2 Karintiyanak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 ᑲᕒᐃᑎᔭᓇᒃ 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Karintiyanak 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. ᑲᕒᐃᑎᔭᓇᒃ 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ojb)", () => {
		expect(p.parse("1Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ojb)", () => {
		expect(p.parse("2Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ojb)", () => {
		expect(p.parse("Kalaahshiyanak 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("ᑲᓬᐋᔑᔭᓇᒃ 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ojb)", () => {
		expect(p.parse("Kalehshiyanak 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("ᑲᓬᐁᔑᔭᓇᒃ 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ojb)", () => {
		expect(p.parse("Ihpiishiyanak 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("ᐃᐲᔑᔭᓇᒃ 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eph 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ojb)", () => {
		expect(p.parse("Pilipiyanak 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("ᐱᓬᐃᐱᔭᓇᒃ 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Php 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ojb)", () => {
		expect(p.parse("1 Tehsalooniyanak 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 ᑌᓴᓬᐆᓂᔭᓇᒃ 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tehsalooniyanak 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. ᑌᓴᓬᐆᓂᔭᓇᒃ 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ojb)", () => {
		expect(p.parse("2 Tehsalooniyanak 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 ᑌᓴᓬᐆᓂᔭᓇᒃ 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tehsalooniyanak 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. ᑌᓴᓬᐆᓂᔭᓇᒃ 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ojb)", () => {
		expect(p.parse("1Th 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ojb)", () => {
		expect(p.parse("2Th 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ojb)", () => {
		expect(p.parse("1 Timahti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 ᑎᒪᑎ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timahti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. ᑎᒪᑎ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ojb)", () => {
		expect(p.parse("2 Timahti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 ᑎᒪᑎ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timahti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. ᑎᒪᑎ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ojb)", () => {
		expect(p.parse("1Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ojb)", () => {
		expect(p.parse("2Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ojb)", () => {
		expect(p.parse("Taitahs 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("ᑕᐃᑕᔅ 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ojb)", () => {
		expect(p.parse("Paailiiman 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Philem 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("ᐹᐃᓬᐄᒪᓐ 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ojb)", () => {
		expect(p.parse("Hiiparoowak 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("ᐄᐸᕒᐆᐗᒃ 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ojb)", () => {
		expect(p.parse("Ciimis 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jas 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("ᒌᒥᔅ 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ojb)", () => {
		expect(p.parse("1 Piitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 ᐲᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piitar 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. ᐲᑕᕒ 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ojb)", () => {
		expect(p.parse("2 Piitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 ᐲᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piitar 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. ᐲᑕᕒ 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ojb)", () => {
		expect(p.parse("1Pe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ojb)", () => {
		expect(p.parse("2Pe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ojb)", () => {
		expect(p.parse("Coot 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("ᒎᑦ 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle ranges (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle ranges (ojb)", () => {
		expect(p.parse("Titus 1:1 - 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 – 2").osis()).toEqual("Titus.1.1-Titus.1.2");
		expect(p.parse("Titus 1:1 — 2").osis()).toEqual("Titus.1.1-Titus.1.2");
	});
});
describe("Parser helper should handle chapters (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle chapters (ojb)", () => {
		expect(p.parse("Titus 1:1, chapter 2").osis()).toEqual("Titus.1.1,Titus.2");
	});
});
describe("Parser helper should handle 'ff' (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle 'ff' (ojb)", () => {
		expect(p.parse("Rev 3ff, 4:2ff").osis()).toEqual("Rev.3-Rev.22,Rev.4.2-Rev.4.11");
	});
});
describe("Parser helper should handle translations (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle translations (ojb)", () => {
		expect(p.parse("Lev 1 (OJBR)").osis_and_translations()).toEqual([["Lev.1","OJBR"]]);
		expect(p.parse("Lev 1 (OJBS)").osis_and_translations()).toEqual([["Lev.1","OJBS"]]);
	});
});
describe("Parser helper should handle book ranges (ojb)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ojb)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn - 3 Cwaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn – 3 Cwaan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Jn — 3 Cwaan").osis()).toEqual("1John.1-3John.1");
	});
});

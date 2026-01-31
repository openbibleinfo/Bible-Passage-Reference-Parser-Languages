"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/idu.js";

describe("Localized book Gen (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (idu)", () => {
		expect(p.parse("Ohútu 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ohút 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (idu)", () => {
		expect(p.parse("Oōyɛbɛ̄cɛ 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Oyɛb 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (idu)", () => {
		expect(p.parse("Ulīfayi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ulīf 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (idu)", () => {
		expect(p.parse("Áluka 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Áluk 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (idu)", () => {
		expect(p.parse("Ikwūayidɔ 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Ikwū 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (idu)", () => {
		expect(p.parse("Ɔdā Nēé Mafú Lɛ Ujɔ́ɔni 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Mafú 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (idu)", () => {
		expect(p.parse("Oblatūkíne 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Obla 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (idu)", () => {
		expect(p.parse("Ujóssuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Ujós 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (idu)", () => {
		expect(p.parse("Ācohɛ́pɔ̄ 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Āco 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (idu)", () => {
		expect(p.parse("Urútu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Urút 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (idu)", () => {
		expect(p.parse("Ayisáya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ayis 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (idu)", () => {
		expect(p.parse("1 Usámuwɛ̄lu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Usám 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usámuwɛ̄lu 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Usám 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (idu)", () => {
		expect(p.parse("2 Usámuwɛ̄lu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Usám 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usámuwɛ̄lu 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Usám 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book Ezra (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (idu)", () => {
		expect(p.parse("Ɛ́sira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ɛ́sra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (idu)", () => {
		expect(p.parse("Unehemíya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Uneh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (idu)", () => {
		expect(p.parse("Ɛ́sta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (idu)", () => {
		expect(p.parse("Ujóbu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ujób 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (idu)", () => {
		expect(p.parse("Aíjē Kú Ɛ̄gbā 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Aíjē 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (idu)", () => {
		expect(p.parse("Aíita 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Aíit 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (idu)", () => {
		expect(p.parse("Ɔ̄cokóītá 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ɔ̄cok 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (idu)", () => {
		expect(p.parse("Ijē Kú Usólōmɔn 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Usól 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (idu)", () => {
		expect(p.parse("Ujɛrɛmíya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ujer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (idu)", () => {
		expect(p.parse("Isíkɛ̄lu 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Isík 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (idu)", () => {
		expect(p.parse("Udánīyɛ̄lu 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Udan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (idu)", () => {
		expect(p.parse("Uhosíi 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Uhos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (idu)", () => {
		expect(p.parse("Ujówɛ̄lu 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Ujów 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (idu)", () => {
		expect(p.parse("Émɔ̄si 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Émɔs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (idu)", () => {
		expect(p.parse("Obadíya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obad 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (idu)", () => {
		expect(p.parse("Ujóna 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Ujón 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (idu)", () => {
		expect(p.parse("Umáyíka 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Umáy 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (idu)", () => {
		expect(p.parse("Unáhum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Unáh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (idu)", () => {
		expect(p.parse("Uhábakūku 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Uháb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (idu)", () => {
		expect(p.parse("Usɛfaníya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Usɛf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (idu)", () => {
		expect(p.parse("Uhágāyi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Uhág 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (idu)", () => {
		expect(p.parse("Usakaríya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Usak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (idu)", () => {
		expect(p.parse("Umálakāyi 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Umál 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (idu)", () => {
		expect(p.parse("Umátiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Umát 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (idu)", () => {
		expect(p.parse("Umáki 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Umák 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (idu)", () => {
		expect(p.parse("Ulúku 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ulúk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (idu)", () => {
		expect(p.parse("1 Ujɔ́ɔni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ujɔ́n 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ujɔ́ɔni 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ujɔ́n 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (idu)", () => {
		expect(p.parse("2 Ujɔ́ɔni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ujɔ́n 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ujɔ́ɔni 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ujɔ́n 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (idu)", () => {
		expect(p.parse("3 Ujɔ́ɔni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ujɔ́n 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ujɔ́ɔni 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ujɔ́n 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (idu)", () => {
		expect(p.parse("Ujɔ́ni 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ujɔ́n 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (idu)", () => {
		expect(p.parse("Úklɔ́ Kú Ācotɛ̄hɔ̄ 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ācot 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book 1Chr (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (idu)", () => {
		expect(p.parse("1 Úklɔ́ Kú Aɔ́cɛ́ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Úklɔ́ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Úklɔ́ Kú Aɔ́cɛ́ 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Úklɔ́ 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (idu)", () => {
		expect(p.parse("2 Úklɔ́ Kú Aɔ́cɛ́ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Úklɔ́ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Úklɔ́ Kú Aɔ́cɛ́ 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Úklɔ́ 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (idu)", () => {
		expect(p.parse("1 Aɔ́cɛ́ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Aɔ́cɛ́ 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (idu)", () => {
		expect(p.parse("2 Aɔ́cɛ́ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Aɔ́cɛ́ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book Rom (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (idu)", () => {
		expect(p.parse("Ācɛ Uróm 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Uróm 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (idu)", () => {
		expect(p.parse("1 Ācɛ Ukɔ́rīnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ukɔ́r 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ācɛ Ukɔ́rīnti 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ukɔ́r 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (idu)", () => {
		expect(p.parse("2 Ācɛ Ukɔ́rīnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ukɔ́r 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ācɛ Ukɔ́rīnti 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ukɔ́r 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (idu)", () => {
		expect(p.parse("Ācɛ Ukólōsi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Ukól 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (idu)", () => {
		expect(p.parse("Ācɛ Ugalésīya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ugal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (idu)", () => {
		expect(p.parse("Ācɛ Ɛ́fēsɔsi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ɛfɛs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (idu)", () => {
		expect(p.parse("Ācɛ Ufílipāyi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ufíl 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (idu)", () => {
		expect(p.parse("1 Ācɛ Utesaloníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Utɛs 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ācɛ Utesaloníka 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Utɛs 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (idu)", () => {
		expect(p.parse("2 Ācɛ Utesaloníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Utɛs 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ācɛ Utesaloníka 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Utɛs 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (idu)", () => {
		expect(p.parse("1 Utímōti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Utím 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Utímōti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Utím 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (idu)", () => {
		expect(p.parse("2 Utímōti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Utím 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Utímōti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Utím 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (idu)", () => {
		expect(p.parse("Utáyítɔ̄si 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Utáy 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (idu)", () => {
		expect(p.parse("Ufílīmɔn 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Ufím 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (idu)", () => {
		expect(p.parse("Ācɛ Uhíbru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Uhíb 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (idu)", () => {
		expect(p.parse("Ujɛ́mīsi 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Ujém 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (idu)", () => {
		expect(p.parse("1 Upíta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Upít 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Upíta 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Upít 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (idu)", () => {
		expect(p.parse("2 Upíta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Upít 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Upíta 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Upít 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (idu)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (idu)", () => {
		expect(p.parse("Ujúudu 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Ujúd 1:1").osis()).toEqual("Jude.1.1");
	});
});

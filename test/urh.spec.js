"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/urh.js";

describe("Localized book Gen (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (urh)", () => {
		expect(p.parse("Jẹnẹsis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (urh)", () => {
		expect(p.parse("Ẹyano 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (urh)", () => {
		expect(p.parse("Livitikọs 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (urh)", () => {
		expect(p.parse("Ukeri 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (urh)", () => {
		expect(p.parse("Uvwerhe 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (urh)", () => {
		expect(p.parse("Ẹvwọphia 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (urh)", () => {
		expect(p.parse("Urhi Rivẹ 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (urh)", () => {
		expect(p.parse("Joshua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (urh)", () => {
		expect(p.parse("Iguẹdjọ 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (urh)", () => {
		expect(p.parse("Rutu 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (urh)", () => {
		expect(p.parse("Aizaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (urh)", () => {
		expect(p.parse("1 Samuẹl 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuẹl 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (urh)", () => {
		expect(p.parse("2 Samuẹl 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuẹl 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 2Kgs (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (urh)", () => {
		expect(p.parse("Ivie rẹ Ivẹ 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (urh)", () => {
		expect(p.parse("1 Ikun rẹ Ivie 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ikun rẹ Ivie 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (urh)", () => {
		expect(p.parse("2 Ikun rẹ Ivie 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ikun rẹ Ivie 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Kgs (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (urh)", () => {
		expect(p.parse("1 Ivie 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ivie 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book Ezra (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (urh)", () => {
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (urh)", () => {
		expect(p.parse("Nehemaya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (urh)", () => {
		expect(p.parse("Ẹsta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (urh)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (urh)", () => {
		expect(p.parse("Une rẹ Ejiro 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (urh)", () => {
		expect(p.parse("Isẹ 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (urh)", () => {
		expect(p.parse("Aghwoghwo 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (urh)", () => {
		expect(p.parse("Solomon 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (urh)", () => {
		expect(p.parse("Jerimaya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (urh)", () => {
		expect(p.parse("Izikiẹl 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (urh)", () => {
		expect(p.parse("Daniẹl 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (urh)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (urh)", () => {
		expect(p.parse("Joẹl 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (urh)", () => {
		expect(p.parse("Emọs 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (urh)", () => {
		expect(p.parse("Ọbe rẹ Ọmraro Ọbadaya Obadaya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (urh)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (urh)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (urh)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (urh)", () => {
		expect(p.parse("Habakọk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (urh)", () => {
		expect(p.parse("Zẹfanaya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (urh)", () => {
		expect(p.parse("Hegae 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (urh)", () => {
		expect(p.parse("Zekaraya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (urh)", () => {
		expect(p.parse("Malakae 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (urh)", () => {
		expect(p.parse("Matiu 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (urh)", () => {
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (urh)", () => {
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 2John (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (urh)", () => {
		expect(p.parse("2 Jon 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jon 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (urh)", () => {
		expect(p.parse("3 Jọn 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (urh)", () => {
		expect(p.parse("1 Jọn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jọn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book John (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (urh)", () => {
		expect(p.parse("Jọn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (urh)", () => {
		expect(p.parse("Iruo rẹ Iyinkọn na 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (urh)", () => {
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (urh)", () => {
		expect(p.parse("1 Kọrẹnt 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kọrẹnt 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (urh)", () => {
		expect(p.parse("2 Kọrẹnt 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kọrẹnt 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (urh)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (urh)", () => {
		expect(p.parse("Galesha 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (urh)", () => {
		expect(p.parse("Ẹfesọs 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (urh)", () => {
		expect(p.parse("Filipae 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (urh)", () => {
		expect(p.parse("1 Tẹsalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tẹsalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (urh)", () => {
		expect(p.parse("2 Tẹsalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tẹsalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (urh)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (urh)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (urh)", () => {
		expect(p.parse("Taitọs 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (urh)", () => {
		expect(p.parse("Filimọn 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (urh)", () => {
		expect(p.parse("Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (urh)", () => {
		expect(p.parse("Jems 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (urh)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (urh)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (urh)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (urh)", () => {
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

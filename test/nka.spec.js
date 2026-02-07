"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/nka.js";

describe("Localized book Gen (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (nka)", () => {
		expect(p.parse("Shitatiko 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Shit 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (nka)", () => {
		expect(p.parse("Kututika 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kut 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (nka)", () => {
		expect(p.parse("Balevi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Bal 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (nka)", () => {
		expect(p.parse("Kulaba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Kul 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (nka)", () => {
		expect(p.parse("Malila 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Mali 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (nka)", () => {
		expect(p.parse("Kuholoka 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kuh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (nka)", () => {
		expect(p.parse("Ndayano 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Nday 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (nka)", () => {
		expect(p.parse("Yoshuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yosh 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (nka)", () => {
		expect(p.parse("Bakakuyata 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Bak 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (nka)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (nka)", () => {
		expect(p.parse("Ishaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isha 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nka)", () => {
		expect(p.parse("1 Shamwele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Shamwele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nka)", () => {
		expect(p.parse("2 Shamwele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Shamwele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (nka)", () => {
		expect(p.parse("1Sha 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (nka)", () => {
		expect(p.parse("2Sha 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nka)", () => {
		expect(p.parse("1 Bamyene 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Bamyene 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nka)", () => {
		expect(p.parse("2 Bamyene 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Bamyene 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (nka)", () => {
		expect(p.parse("1Bamy 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (nka)", () => {
		expect(p.parse("2Bamy 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nka)", () => {
		expect(p.parse("1 Byambo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Byambo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nka)", () => {
		expect(p.parse("2 Byambo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Byambo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (nka)", () => {
		expect(p.parse("1Bya 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (nka)", () => {
		expect(p.parse("2Bya 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (nka)", () => {
		expect(p.parse("Ezila 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (nka)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (nka)", () => {
		expect(p.parse("Eshita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Eshi 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (nka)", () => {
		expect(p.parse("Yobo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (nka)", () => {
		expect(p.parse("Nyimbo 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nyi 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (nka)", () => {
		expect(p.parse("Zincimpi 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Zinc 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (nka)", () => {
		expect(p.parse("Mukakushimikila 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Muka 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (nka)", () => {
		expect(p.parse("Lwimbo 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Lwi 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (nka)", () => {
		expect(p.parse("Yelemiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (nka)", () => {
		expect(p.parse("Ezekiyele 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (nka)", () => {
		expect(p.parse("Ndanyele 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ndan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (nka)", () => {
		expect(p.parse("Hoshiya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hosh 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (nka)", () => {
		expect(p.parse("Yowele 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yowe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (nka)", () => {
		expect(p.parse("Amoshi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (nka)", () => {
		expect(p.parse("Ombandiya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Omba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (nka)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (nka)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (nka)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (nka)", () => {
		expect(p.parse("Hambakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hamba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (nka)", () => {
		expect(p.parse("Zefwaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zefw 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (nka)", () => {
		expect(p.parse("Hangayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hang 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (nka)", () => {
		expect(p.parse("Zakaliya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zaka 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (nka)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mala 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (nka)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (nka)", () => {
		expect(p.parse("Mako 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mak 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (nka)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nka)", () => {
		expect(p.parse("1Yowa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nka)", () => {
		expect(p.parse("2Yowa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (nka)", () => {
		expect(p.parse("3 Yowano 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yowa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yowa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (nka)", () => {
		expect(p.parse("1 Yowano 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yowa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowano 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yowa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (nka)", () => {
		expect(p.parse("2 Yowano 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yowa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowano 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yowa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (nka)", () => {
		expect(p.parse("Yowano 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yowa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (nka)", () => {
		expect(p.parse("Milimo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (nka)", () => {
		expect(p.parse("Baloma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Lom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nka)", () => {
		expect(p.parse("1 Kolinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Koli 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nka)", () => {
		expect(p.parse("2 Kolinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Koli 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (nka)", () => {
		expect(p.parse("1Koli 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (nka)", () => {
		expect(p.parse("2Koli 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (nka)", () => {
		expect(p.parse("Bakakoloshe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Koloshe 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (nka)", () => {
		expect(p.parse("Ngalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nga 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (nka)", () => {
		expect(p.parse("Bakaefweshe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efweshe 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efwe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (nka)", () => {
		expect(p.parse("Bakafwilipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwilipu 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fwip 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nka)", () => {
		expect(p.parse("1 Bakateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Teshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Bakateshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Teshalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesh 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nka)", () => {
		expect(p.parse("2 Bakateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Teshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Bakateshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Teshalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesh 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (nka)", () => {
		expect(p.parse("1Tesh 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (nka)", () => {
		expect(p.parse("2Tesh 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nka)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nka)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (nka)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (nka)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (nka)", () => {
		expect(p.parse("Taitashi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tai 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (nka)", () => {
		expect(p.parse("Fwilimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fwim 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (nka)", () => {
		expect(p.parse("Bahebelu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Bah 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (nka)", () => {
		expect(p.parse("Yakoba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yako 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nka)", () => {
		expect(p.parse("1 Pita 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nka)", () => {
		expect(p.parse("2 Pita 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (nka)", () => {
		expect(p.parse("1Pita 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (nka)", () => {
		expect(p.parse("2Pita 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (nka)", () => {
		expect(p.parse("Yunda 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yun 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (nka)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (nka)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yowa - 3 Yowano").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yowa – 3 Yowano").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yowa — 3 Yowano").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hdy.js";

describe("Localized book Gen (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hdy)", () => {
		expect(p.parse("Qooccanchi Kitaaba 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Qoc 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hdy)", () => {
		expect(p.parse("Dooyyi Kitaaba 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Doy 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hdy)", () => {
		expect(p.parse("Qeessuwwi Kitaaba 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Qes 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hdy)", () => {
		expect(p.parse("Xiqqi Kitaaba 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Xiq 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hdy)", () => {
		expect(p.parse("Kichchechchi Kitaaba 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Kich 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hdy)", () => {
		expect(p.parse("Yohaannis Kaalta 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hdy)", () => {
		expect(p.parse("See'l Kitaaba 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Se'l 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hdy)", () => {
		expect(p.parse("Iyyaas Kitaaba 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Iya 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hdy)", () => {
		expect(p.parse("Gassaa'n Kitaaba 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Gas 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hdy)", () => {
		expect(p.parse("Ruut Kitaaba 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hdy)", () => {
		expect(p.parse("Issaayyaas Kitaaba 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hdy)", () => {
		expect(p.parse("1 Saamu'eel Kitaaba 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Saamu'eel Kitaaba 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hdy)", () => {
		expect(p.parse("2 Saamu'eel Kitaaba 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Saamu'eel Kitaaba 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hdy)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hdy)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hdy)", () => {
		expect(p.parse("1Adlilluwwi kitaaba 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Adl 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hdy)", () => {
		expect(p.parse("2 Adilluwwi Kitaaba 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Adilluwwi Kitaaba 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hdy)", () => {
		expect(p.parse("2Adl 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hdy)", () => {
		expect(p.parse("1 Agannuwwi Kitaaba 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Agannuwwi Kitaaba 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hdy)", () => {
		expect(p.parse("1Aga 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hdy)", () => {
		expect(p.parse("2Agannuwwi Kitaaba 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2Aga 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hdy)", () => {
		expect(p.parse("Izir Kitaaba 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hdy)", () => {
		expect(p.parse("Nahim Kitaaba 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hdy)", () => {
		expect(p.parse("Asteer Kitaaba 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ast 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hdy)", () => {
		expect(p.parse("Iyyoob Kitaaba 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hdy)", () => {
		expect(p.parse("Mazmuu'l Kitaaba 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maz 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hdy)", () => {
		expect(p.parse("Kobi'llishshi Kitaaba 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kob 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hdy)", () => {
		expect(p.parse("Hayyo'i Kitaaba 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Hay 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hdy)", () => {
		expect(p.parse("Birimmi Kitaaba 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Bir 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hdy)", () => {
		expect(p.parse("Ermiyaas Kitaaba 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hdy)", () => {
		expect(p.parse("Hizqi'eel Kitaaba 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hdy)", () => {
		expect(p.parse("Daani'eel Kitaaba 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hdy)", () => {
		expect(p.parse("Hoose'i Kitaaba 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hdy)", () => {
		expect(p.parse("Iyyoo'eel Kitaaba 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Iyo 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hdy)", () => {
		expect(p.parse("Amoox Kitaaba 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hdy)", () => {
		expect(p.parse("Abdiy kitaaba 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hdy)", () => {
		expect(p.parse("Yoonaas Kitaaba 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hdy)", () => {
		expect(p.parse("Mikkiyaas Kitaaba 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hdy)", () => {
		expect(p.parse("Naahoom Kitaaba 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Noh 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hdy)", () => {
		expect(p.parse("Inbaaqoom Kitaaba 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Inb 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hdy)", () => {
		expect(p.parse("Safooniyaas Kitaaba 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Saf 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hdy)", () => {
		expect(p.parse("Hage'i Kitaaba 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hdy)", () => {
		expect(p.parse("Zakkaaryaas Kitaaba 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hdy)", () => {
		expect(p.parse("Milkiyaas Kitaaba 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mil 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hdy)", () => {
		expect(p.parse("Maatiwoos Mishiraachcha 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hdy)", () => {
		expect(p.parse("Maarqoos Mishiraachcha 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hdy)", () => {
		expect(p.parse("Luqaas Mishiraachcha 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hdy)", () => {
		expect(p.parse("1Yohaannis Asso 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hdy)", () => {
		expect(p.parse("2Yohaannis Asso 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hdy)", () => {
		expect(p.parse("3Yohaannis Asso 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hdy)", () => {
		expect(p.parse("Yohaannis Mishiraachcha 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hdy)", () => {
		expect(p.parse("Asse'amaa'n Baxo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ass 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hdy)", () => {
		expect(p.parse("Oroome'i Asso 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hdy)", () => {
		expect(p.parse("1Qorontoos Asso 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hdy)", () => {
		expect(p.parse("2Qorontoos Asso 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hdy)", () => {
		expect(p.parse("Qollaasiyaas Asso 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hdy)", () => {
		expect(p.parse("Galatiy Asso 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hdy)", () => {
		expect(p.parse("Efeesoon Asso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efe 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hdy)", () => {
		expect(p.parse("Filiphphisiyus Asso 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hdy)", () => {
		expect(p.parse("1Tasalonqe'i Asso 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hdy)", () => {
		expect(p.parse("2Tasalonqe'i Asso 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hdy)", () => {
		expect(p.parse("1Ximootoos Asso 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hdy)", () => {
		expect(p.parse("2Ximootoos Asso 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hdy)", () => {
		expect(p.parse("Tiito'i Asso 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hdy)", () => {
		expect(p.parse("Filimoon Asso 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Film 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hdy)", () => {
		expect(p.parse("Ibro'i Asso 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hdy)", () => {
		expect(p.parse("Yaaqoob Asso 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hdy)", () => {
		expect(p.parse("1Pheexiroos Asso 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1Phex 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hdy)", () => {
		expect(p.parse("2Pheexiroos Asso 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2Phex 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hdy)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hdy)", () => {
		expect(p.parse("Yihud Asso 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yih 1:1").osis()).toEqual("Jude.1.1");
	});
});

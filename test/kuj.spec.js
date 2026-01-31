"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kuj.js";

describe("Localized book Gen (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kuj)", () => {
		expect(p.parse("Ögötanga 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Ögt 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kuj)", () => {
		expect(p.parse("Ëgeetëko 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Ëgt 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kuj)", () => {
		expect(p.parse("Abharawi 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Abhar 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kuj)", () => {
		expect(p.parse("Ëbharo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Ëbh 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kuj)", () => {
		expect(p.parse("Sira 1:1").osis()).toEqual("Sir.1.1");
		expect(p.parse("Sir 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kuj)", () => {
		expect(p.parse("Öbhöng'aini bho Sureimani 1:1").osis()).toEqual("Wis.1.1");
		expect(p.parse("Öbh 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kuj)", () => {
		expect(p.parse("Ikuuro 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Iku 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kuj)", () => {
		expect(p.parse("Okohonyorroa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Öbhöhönyöro 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Öbhö 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Okoh 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kuj)", () => {
		expect(p.parse("Ëhëëtöko ya Amarago 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Ëhë 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kuj)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kuj)", () => {
		expect(p.parse("Abhahökania 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Abh 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kuj)", () => {
		expect(p.parse("Ruti 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kuj)", () => {
		expect(p.parse("Isaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kuj)", () => {
		expect(p.parse("1 Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueri 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kuj)", () => {
		expect(p.parse("2 Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueri 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kuj)", () => {
		expect(p.parse("1 Abhagambi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Gam 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Abhagambi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Gam 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kuj)", () => {
		expect(p.parse("2 Abhagambi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Gam 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Abhagambi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Gam 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kuj)", () => {
		expect(p.parse("1 Amang'ana gi Ichinkaaga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ich 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Amang'ana gi Ichinkaaga 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ich 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kuj)", () => {
		expect(p.parse("2 Amang'ana gi Ichinkaaga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ich 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Amang'ana gi Ichinkaaga 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ich 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kuj)", () => {
		expect(p.parse("Esira 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esr 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kuj)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kuj)", () => {
		expect(p.parse("Ayubhu 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayb 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kuj)", () => {
		expect(p.parse("Ësabhuri 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sab 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kuj)", () => {
		expect(p.parse("Ibhirengiö 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Ibh 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kuj)", () => {
		expect(p.parse("Umurundia 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Umu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kuj)", () => {
		expect(p.parse("Irisiringio rë Ëtegerio 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Iri 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kuj)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kuj)", () => {
		expect(p.parse("Esekieri 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ese 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kuj)", () => {
		expect(p.parse("Tanieri 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Tan 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kuj)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kuj)", () => {
		expect(p.parse("Yoeri 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kuj)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kuj)", () => {
		expect(p.parse("Obhatia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kuj)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kuj)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("MiK 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kuj)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kuj)", () => {
		expect(p.parse("Habhakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hak 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kuj)", () => {
		expect(p.parse("Sebhania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Seb 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kuj)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kuj)", () => {
		expect(p.parse("Sekaria 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kuj)", () => {
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mari 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kuj)", () => {
		expect(p.parse("Mataayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Matayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kuj)", () => {
		expect(p.parse("Maarikö 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mariko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kuj)", () => {
		expect(p.parse("Ruuka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruk 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Rk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kuj)", () => {
		expect(p.parse("1 Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yöhana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yöh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yöhana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoh 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yöh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kuj)", () => {
		expect(p.parse("2 Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yöhana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yöh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yöhana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoh 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yöh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kuj)", () => {
		expect(p.parse("3 Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yöhana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yöh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yöhana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yoh 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yöh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kuj)", () => {
		expect(p.parse("Yohana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yöhana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yöh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kuj)", () => {
		expect(p.parse("Amakora 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Amaköra 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Amak 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Ama 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kuj)", () => {
		expect(p.parse("Abaruumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Abharumi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rum 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kuj)", () => {
		expect(p.parse("1 Abaköriinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Abhakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kö 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abaköriinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Abhakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ko 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kö 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kuj)", () => {
		expect(p.parse("2 Abaköriinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Abhakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kö 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abaköriinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Abhakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ko 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kö 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kuj)", () => {
		expect(p.parse("Abhakorosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Abakörösai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Körö 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kor 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kuj)", () => {
		expect(p.parse("Abhagaratia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Abagaratia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gar 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kuj)", () => {
		expect(p.parse("Abhaebheso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Abaëbëëso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Eb 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kuj)", () => {
		expect(p.parse("Abhabhiribi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Ababiribi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bhi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Bir 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kuj)", () => {
		expect(p.parse("1 Abhatesaronike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abatesaronike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Abh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abhatesaronike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abatesaronike 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Abh 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kuj)", () => {
		expect(p.parse("2 Abhatesaronike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abatesaronike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Abh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abhatesaronike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abatesaronike 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Abh 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kuj)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kuj)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kuj)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kuj)", () => {
		expect(p.parse("Bhiremoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Biremööni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bhir 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Bire 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kuj)", () => {
		expect(p.parse("Abhaebhurania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Abaibrania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kuj)", () => {
		expect(p.parse("Yakobho 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaköbö 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kuj)", () => {
		expect(p.parse("1 Bëëtërö 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bhetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bët 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Bhe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bëëtërö 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bhetero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bët 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bhe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kuj)", () => {
		expect(p.parse("2 Bëëtërö 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bhetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bët 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Bhe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bëëtërö 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bhetero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bët 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bhe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kuj)", () => {
		expect(p.parse("Yuuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kuj)", () => {
		expect(p.parse("Tobhiti 1:1").osis()).toEqual("Tob.1.1");
		expect(p.parse("Tob 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kuj)", () => {
		expect(p.parse("Yutiti 1:1").osis()).toEqual("Jdt.1.1");
		expect(p.parse("Yut 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kuj)", () => {
		expect(p.parse("Bharuku 1:1").osis()).toEqual("Bar.1.1");
		expect(p.parse("Bhar 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kuj)", () => {
		expect(p.parse("1 Abamakabhayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1 Mak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Abamakabhayo 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kuj)", () => {
		expect(p.parse("2 Abamakabhayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2 Mak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Abamakabhayo 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Esth (kuj)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kuj)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/kam.js";

describe("Localized book Gen (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (kam)", () => {
		expect(p.parse("Mwambĩlĩlyo 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Mwa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (kam)", () => {
		expect(p.parse("Kuma 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (kam)", () => {
		expect(p.parse("Alivai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Ali 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (kam)", () => {
		expect(p.parse("Motalo 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Mot 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (kam)", () => {
		expect(p.parse("Sil 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (kam)", () => {
		expect(p.parse("Ũĩ 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (kam)", () => {
		expect(p.parse("Iĩo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (kam)", () => {
		expect(p.parse("Ũvuan’yo 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ũvu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (kam)", () => {
		expect(p.parse("Kũtũngĩlĩlwa Kwa Mĩao 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kũt 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (kam)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (kam)", () => {
		expect(p.parse("Asili 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Asi 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (kam)", () => {
		expect(p.parse("Luthi 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lu 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Lũ 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (kam)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ĩsa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kam)", () => {
		expect(p.parse("1 Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samueli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kam)", () => {
		expect(p.parse("2 Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samueli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (kam)", () => {
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (kam)", () => {
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kam)", () => {
		expect(p.parse("1 Asumbĩ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Asu 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Asumbĩ 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Asu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kam)", () => {
		expect(p.parse("2 Asumbĩ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Asu 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Asumbĩ 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Asu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (kam)", () => {
		expect(p.parse("1Asu 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (kam)", () => {
		expect(p.parse("2Asu 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kam)", () => {
		expect(p.parse("1 Mavinda 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Mav 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mavinda 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mav 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kam)", () => {
		expect(p.parse("2 Mavinda 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Mav 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mavinda 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mav 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (kam)", () => {
		expect(p.parse("1Mav 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (kam)", () => {
		expect(p.parse("2Mav 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (kam)", () => {
		expect(p.parse("Esala 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esa 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (kam)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nee 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (kam)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (kam)", () => {
		expect(p.parse("Yovu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (kam)", () => {
		expect(p.parse("Savuli 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sav 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (kam)", () => {
		expect(p.parse("Nthimo 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Nth 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (kam)", () => {
		expect(p.parse("Mũtavan’ya 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Mũta 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (kam)", () => {
		expect(p.parse("Wathi 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Wa 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (kam)", () => {
		expect(p.parse("Yelemai 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yel 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (kam)", () => {
		expect(p.parse("Esekieli 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Esek 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (kam)", () => {
		expect(p.parse("Ndanieli 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Nda 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (kam)", () => {
		expect(p.parse("Osea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (kam)", () => {
		expect(p.parse("Yoeli 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yoe 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (kam)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amo 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (kam)", () => {
		expect(p.parse("Ovatia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ova 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (kam)", () => {
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (kam)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (kam)", () => {
		expect(p.parse("Naumu 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nau 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Naũ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (kam)", () => {
		expect(p.parse("Avakuki 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Ava 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (kam)", () => {
		expect(p.parse("Nzevania 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Nzev 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (kam)", () => {
		expect(p.parse("Akai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (kam)", () => {
		expect(p.parse("Nzekalia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Nzek 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (kam)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (kam)", () => {
		expect(p.parse("Mathayo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (kam)", () => {
		expect(p.parse("Maliko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (kam)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kam)", () => {
		expect(p.parse("1Yoa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kam)", () => {
		expect(p.parse("2Yoa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (kam)", () => {
		expect(p.parse("3 Yoana 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Yoa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (kam)", () => {
		expect(p.parse("1 Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Yoa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoana 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yoa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (kam)", () => {
		expect(p.parse("2 Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Yoa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoana 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yoa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (kam)", () => {
		expect(p.parse("Yoana 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (kam)", () => {
		expect(p.parse("Meko Ma Atũmwa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Meko 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (kam)", () => {
		expect(p.parse("Alomi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Alo 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kam)", () => {
		expect(p.parse("1 Akolintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Ako 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akolintho 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Ako 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kam)", () => {
		expect(p.parse("2 Akolintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Ako 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akolintho 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Ako 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (kam)", () => {
		expect(p.parse("1Ako 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (kam)", () => {
		expect(p.parse("2Ako 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (kam)", () => {
		expect(p.parse("Akolosai 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKol 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("aKo 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (kam)", () => {
		expect(p.parse("Akalatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Aka 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (kam)", () => {
		expect(p.parse("Aeveso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Aev 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (kam)", () => {
		expect(p.parse("Avilivi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Avi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kam)", () => {
		expect(p.parse("1 Athesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ath 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Athesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ath 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kam)", () => {
		expect(p.parse("2 Athesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ath 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Athesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ath 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (kam)", () => {
		expect(p.parse("1Ath 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (kam)", () => {
		expect(p.parse("2Ath 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kam)", () => {
		expect(p.parse("1 Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotheo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kam)", () => {
		expect(p.parse("2 Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotheo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (kam)", () => {
		expect(p.parse("1Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (kam)", () => {
		expect(p.parse("2Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (kam)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (kam)", () => {
		expect(p.parse("Vilemona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Vil 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (kam)", () => {
		expect(p.parse("Aevelania 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Aevl 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (kam)", () => {
		expect(p.parse("Yakovo 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kam)", () => {
		expect(p.parse("1 Vetelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Vet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Vetelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Vet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kam)", () => {
		expect(p.parse("2 Vetelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Vet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Vetelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Vet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (kam)", () => {
		expect(p.parse("1Vet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (kam)", () => {
		expect(p.parse("2Vet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (kam)", () => {
		expect(p.parse("Yuta 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (kam)", () => {
		expect(p.parse("Tov 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (kam)", () => {
		expect(p.parse("Yund 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (kam)", () => {
		expect(p.parse("Mba 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (kam)", () => {
		expect(p.parse("1Mak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (kam)", () => {
		expect(p.parse("2Mak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Parser helper should handle book ranges (kam)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (kam)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoa - 3 Yoana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoa – 3 Yoana").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1Yoa — 3 Yoana").osis()).toEqual("1John.1-3John.1");
	});
});

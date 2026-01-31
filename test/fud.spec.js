"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/fud.js";

describe("Localized book Gen (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (fud)", () => {
		expect(p.parse("Senesi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (fud)", () => {
		expect(p.parse("Ekesote 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (fud)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (fud)", () => {
		expect(p.parse("Numelo 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (fud)", () => {
		expect(p.parse("Tagi laulau a Selemia 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (fud)", () => {
		expect(p.parse("Apokalipisi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (fud)", () => {
		expect(p.parse("Tetelonome 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (fud)", () => {
		expect(p.parse("Sosue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (fud)", () => {
		expect(p.parse("Tuifakamaau 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (fud)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (fud)", () => {
		expect(p.parse("Esaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (fud)", () => {
		expect(p.parse("Uluaki tosi a Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Uluaki. tosi a Samuele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (fud)", () => {
		expect(p.parse("Lua tosi a Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Lua. tosi a Samuele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (fud)", () => {
		expect(p.parse("Uluaki tosi o Sau 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Uluaki. tosi o Sau 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (fud)", () => {
		expect(p.parse("Lua tosi o Sau 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Lua. tosi o Sau 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (fud)", () => {
		expect(p.parse("Uluaki tosi o Koloniko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Uluaki. tosi o Koloniko 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (fud)", () => {
		expect(p.parse("Lua tosi o Koloniko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Lua. tosi o Koloniko 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (fud)", () => {
		expect(p.parse("Esetalasi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (fud)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (fud)", () => {
		expect(p.parse("Esitele 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (fud)", () => {
		expect(p.parse("Sopo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (fud)", () => {
		expect(p.parse("Pesalemo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (fud)", () => {
		expect(p.parse("Taagapati 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (fud)", () => {
		expect(p.parse("Ekelesiasi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (fud)", () => {
		expect(p.parse("Katiko o Katiko 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (fud)", () => {
		expect(p.parse("Selemia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (fud)", () => {
		expect(p.parse("Esekiele 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (fud)", () => {
		expect(p.parse("Taniela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (fud)", () => {
		expect(p.parse("Oseo 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (fud)", () => {
		expect(p.parse("Soele 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (fud)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (fud)", () => {
		expect(p.parse("Apetiasi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (fud)", () => {
		expect(p.parse("Sonasi 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (fud)", () => {
		expect(p.parse("Mikea 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (fud)", () => {
		expect(p.parse("Naume 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (fud)", () => {
		expect(p.parse("Apakuki 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (fud)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (fud)", () => {
		expect(p.parse("Akeseo 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (fud)", () => {
		expect(p.parse("Sakalia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (fud)", () => {
		expect(p.parse("Malakia 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (fud)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (fud)", () => {
		expect(p.parse("Maleko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (fud)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (fud)", () => {
		expect(p.parse("Uluaki tosi a Soane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Uluaki. tosi a Soane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (fud)", () => {
		expect(p.parse("Lua tosi a Soane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Lua. tosi a Soane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (fud)", () => {
		expect(p.parse("Tolu tosi a Soane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tolu. tosi a Soane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (fud)", () => {
		expect(p.parse("Soane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (fud)", () => {
		expect(p.parse("Gaoi 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (fud)", () => {
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (fud)", () => {
		expect(p.parse("Uluaki tosi ki le kau Kolinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Uluaki. tosi ki le kau Kolinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (fud)", () => {
		expect(p.parse("Lua tosi ki le kau Kolinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Lua. tosi ki le kau Kolinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (fud)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (fud)", () => {
		expect(p.parse("Kalate 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (fud)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (fud)", () => {
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (fud)", () => {
		expect(p.parse("Uluaki tosi ki le kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Uluaki. tosi ki le kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (fud)", () => {
		expect(p.parse("Lua tosi ki le kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Lua. tosi ki le kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (fud)", () => {
		expect(p.parse("Uluaki tosi kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Uluaki. tosi kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (fud)", () => {
		expect(p.parse("Lua tosi kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Lua. tosi kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (fud)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (fud)", () => {
		expect(p.parse("Filemo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (fud)", () => {
		expect(p.parse("Epelo 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (fud)", () => {
		expect(p.parse("Sakopo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (fud)", () => {
		expect(p.parse("Uluaki tosi a Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Uluaki. tosi a Petelo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (fud)", () => {
		expect(p.parse("Lua tosi a Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Lua. tosi a Petelo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (fud)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (fud)", () => {
		expect(p.parse("Suta 1:1").osis()).toEqual("Jude.1.1");
	});
});

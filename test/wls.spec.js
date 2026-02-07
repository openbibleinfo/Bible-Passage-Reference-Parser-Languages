"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wls.js";

describe("Localized book Gen (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wls)", () => {
		expect(p.parse("Senesi 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wls)", () => {
		expect(p.parse("Ekesote 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (wls)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (wls)", () => {
		expect(p.parse("Numelo 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (wls)", () => {
		expect(p.parse("Tagi laulau a Selemia 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wls)", () => {
		expect(p.parse("Apokalipisi 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (wls)", () => {
		expect(p.parse("Tetelonome 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (wls)", () => {
		expect(p.parse("Sosue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (wls)", () => {
		expect(p.parse("Tui Fakamaau 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (wls)", () => {
		expect(p.parse("Lute 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (wls)", () => {
		expect(p.parse("Esaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wls)", () => {
		expect(p.parse("1 Tohi A Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Tohi A Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Uluaki Tohi A Samuele 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Uluaki. Tohi A Samuele 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wls)", () => {
		expect(p.parse("2 Tohi A Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Tohi A Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Lua Tohi A Samuele 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Lua. Tohi A Samuele 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (wls)", () => {
		expect(p.parse("1 Hau 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hau 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Uluaki Hau 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Uluaki. Hau 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (wls)", () => {
		expect(p.parse("2 Hau 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hau 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Lua Hau 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Lua. Hau 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (wls)", () => {
		expect(p.parse("1 Koloniko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Koloniko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Uluaki Koloniko 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Uluaki. Koloniko 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (wls)", () => {
		expect(p.parse("2 Koloniko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Koloniko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Lua Koloniko 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Lua. Koloniko 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (wls)", () => {
		expect(p.parse("Esetalasi 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (wls)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (wls)", () => {
		expect(p.parse("Esitele 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (wls)", () => {
		expect(p.parse("Sopo 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (wls)", () => {
		expect(p.parse("Pesalemo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (wls)", () => {
		expect(p.parse("Taaga Lea 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (wls)", () => {
		expect(p.parse("Ekelesiasi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (wls)", () => {
		expect(p.parse("Katiko O Te U Katiko 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (wls)", () => {
		expect(p.parse("Selemia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (wls)", () => {
		expect(p.parse("Esekiele 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (wls)", () => {
		expect(p.parse("Taniela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (wls)", () => {
		expect(p.parse("Oseo 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (wls)", () => {
		expect(p.parse("Soele 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (wls)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (wls)", () => {
		expect(p.parse("Apetiasi 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (wls)", () => {
		expect(p.parse("Sonasi 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (wls)", () => {
		expect(p.parse("Mikea 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (wls)", () => {
		expect(p.parse("Naume 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (wls)", () => {
		expect(p.parse("Hapakuke 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (wls)", () => {
		expect(p.parse("Sofoni 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (wls)", () => {
		expect(p.parse("Akeseo 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (wls)", () => {
		expect(p.parse("Sakalia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (wls)", () => {
		expect(p.parse("Malakia 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wls)", () => {
		expect(p.parse("Evaselio A Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wls)", () => {
		expect(p.parse("Evaselio A Maleko 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Maleko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wls)", () => {
		expect(p.parse("Evaselio A Luka 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wls)", () => {
		expect(p.parse("1 Tohi A Soane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Tohi A Soane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Uluaki Tohi A Soane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Uluaki. Tohi A Soane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wls)", () => {
		expect(p.parse("2 Tohi A Soane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Tohi A Soane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Lua Tohi A Soane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Lua. Tohi A Soane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wls)", () => {
		expect(p.parse("Tolu Tohi A Soane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("Tolu. Tohi A Soane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wls)", () => {
		expect(p.parse("Evaselio A Soane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Soane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wls)", () => {
		expect(p.parse("Tohi Gaue A Te Kau Apositolo 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Tohi Gaue 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wls)", () => {
		expect(p.parse("Tohi a Paulo ki te kau Loma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Loma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wls)", () => {
		expect(p.parse("1 tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Uluaki tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Uluaki Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Uluaki. tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Uluaki. Kolinito 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wls)", () => {
		expect(p.parse("2 tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Lua tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Lua Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Lua. tohi a Paulo ki te kau Kolinito 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Lua. Kolinito 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wls)", () => {
		expect(p.parse("Tohi a Paulo ki te kau Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wls)", () => {
		expect(p.parse("Tohi a Paulo ki te kau Kalate 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalate 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wls)", () => {
		expect(p.parse("Tohi a Paulo ki te kau Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wls)", () => {
		expect(p.parse("Tohi a Paulo ki te kau Filipe 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipe 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wls)", () => {
		expect(p.parse("1 tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Uluaki tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Uluaki Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Uluaki. tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Uluaki. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wls)", () => {
		expect(p.parse("2 tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Lua tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Lua Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Lua. tohi a Paulo ki te kau Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Lua. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wls)", () => {
		expect(p.parse("1 tohi a Paulo kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. tohi a Paulo kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Uluaki tohi a Paulo kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Uluaki Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Uluaki. tohi a Paulo kia Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Uluaki. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wls)", () => {
		expect(p.parse("2 tohi a Paulo kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. tohi a Paulo kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Lua tohi a Paulo kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Lua Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Lua. tohi a Paulo kia Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Lua. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wls)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wls)", () => {
		expect(p.parse("Filemo 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wls)", () => {
		expect(p.parse("Tohi ki te kau Hepeleo 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hepeleo 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wls)", () => {
		expect(p.parse("Tohi A Sakopo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wls)", () => {
		expect(p.parse("1 Tohi A Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Tohi A Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Uluaki Tohi A Petelo 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Uluaki. Tohi A Petelo 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wls)", () => {
		expect(p.parse("2 Tohi A Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Tohi A Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Lua Tohi A Petelo 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Lua. Tohi A Petelo 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wls)", () => {
		expect(p.parse("Tohi A Suta 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (wls)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (wls)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Tohi A Soane - Tolu Tohi A Soane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Tohi A Soane – Tolu Tohi A Soane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Tohi A Soane — Tolu Tohi A Soane").osis()).toEqual("1John.1-3John.1");
	});
});

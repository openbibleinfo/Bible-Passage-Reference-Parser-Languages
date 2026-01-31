"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hmo.js";

describe("Localized book Gen (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hmo)", () => {
		expect(p.parse("Genese 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hmo)", () => {
		expect(p.parse("Esodo 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hmo)", () => {
		expect(p.parse("Levitiko 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hmo)", () => {
		expect(p.parse("Numera 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hmo)", () => {
		expect(p.parse("Lalohisihisi 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hmo)", () => {
		expect(p.parse("Apokalupo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hmo)", () => {
		expect(p.parse("Deuteronomi 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hmo)", () => {
		expect(p.parse("Iosua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hmo)", () => {
		expect(p.parse("Gunalaia Taudia 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Gunalaia 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hmo)", () => {
		expect(p.parse("Ruta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hmo)", () => {
		expect(p.parse("Isaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hmo)", () => {
		expect(p.parse("1 Samuela 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuela 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hmo)", () => {
		expect(p.parse("2 Samuela 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuela 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hmo)", () => {
		expect(p.parse("1 King Taudia 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. King Taudia 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hmo)", () => {
		expect(p.parse("2 King Taudia 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. King Taudia 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hmo)", () => {
		expect(p.parse("1 Sivarai 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Sivarai 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hmo)", () => {
		expect(p.parse("2 Sivarai 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Sivarai 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hmo)", () => {
		expect(p.parse("Esera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hmo)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hmo)", () => {
		expect(p.parse("Eseta 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hmo)", () => {
		expect(p.parse("Iobu 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hmo)", () => {
		expect(p.parse("Salamo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hmo)", () => {
		expect(p.parse("Aonega Herevadia 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Aonega 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hmo)", () => {
		expect(p.parse("Hadibaia Tauna 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Hadibaia 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hmo)", () => {
		expect(p.parse("Solomona Ena Ane 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Solomona 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hmo)", () => {
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hmo)", () => {
		expect(p.parse("Esekiela 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hmo)", () => {
		expect(p.parse("Daniela 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hmo)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hmo)", () => {
		expect(p.parse("Ioela 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hmo)", () => {
		expect(p.parse("Amosa 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hmo)", () => {
		expect(p.parse("Obadaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Obadia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hmo)", () => {
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hmo)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hmo)", () => {
		expect(p.parse("Nahumu 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hmo)", () => {
		expect(p.parse("Habakuku 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hmo)", () => {
		expect(p.parse("Sepanaia 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hmo)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hmo)", () => {
		expect(p.parse("Sekaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sekaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hmo)", () => {
		expect(p.parse("Malaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hmo)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hmo)", () => {
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hmo)", () => {
		expect(p.parse("Luka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hmo)", () => {
		expect(p.parse("1 Ioane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hmo)", () => {
		expect(p.parse("2 Ioane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hmo)", () => {
		expect(p.parse("3 Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Ioane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hmo)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hmo)", () => {
		expect(p.parse("Aposetolo Edia Kara 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Aposetolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hmo)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hmo)", () => {
		expect(p.parse("1 Korinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hmo)", () => {
		expect(p.parse("2 Korinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hmo)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hmo)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hmo)", () => {
		expect(p.parse("Efeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hmo)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hmo)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hmo)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hmo)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hmo)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hmo)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hmo)", () => {
		expect(p.parse("Filemona 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hmo)", () => {
		expect(p.parse("Heberu 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hmo)", () => {
		expect(p.parse("Iamesi 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hmo)", () => {
		expect(p.parse("1 Petero 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hmo)", () => {
		expect(p.parse("2 Petero 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hmo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hmo)", () => {
		expect(p.parse("Iuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

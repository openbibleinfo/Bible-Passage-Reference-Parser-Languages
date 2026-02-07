"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/gil.js";

describe("Localized book Gen (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (gil)", () => {
		expect(p.parse("Karikani B'aai 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Kar 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (gil)", () => {
		expect(p.parse("Te Otinako 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Te Oti 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (gil)", () => {
		expect(p.parse("Nakoaia Ibonga 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Nak 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (gil)", () => {
		expect(p.parse("Warekaia Iteraera 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("War 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (gil)", () => {
		expect(p.parse("B'aeb'aeti 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (gil)", () => {
		expect(p.parse("Te Kaotioti 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Te Ka 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (gil)", () => {
		expect(p.parse("Te Tua-Kaua 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Te Tua 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (gil)", () => {
		expect(p.parse("Iotua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (gil)", () => {
		expect(p.parse("Tani Motiki-taeka 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tani 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (gil)", () => {
		expect(p.parse("Ruuta 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (gil)", () => {
		expect(p.parse("Itaia 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gil)", () => {
		expect(p.parse("1 Tam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Tam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gil)", () => {
		expect(p.parse("2 Tam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Tam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (gil)", () => {
		expect(p.parse("1.Tamuera 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (gil)", () => {
		expect(p.parse("2.Tamuera 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gil)", () => {
		expect(p.parse("1 Uea 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Uea 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gil)", () => {
		expect(p.parse("2 Uea 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Uea 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (gil)", () => {
		expect(p.parse("1.Uea 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (gil)", () => {
		expect(p.parse("2.Uea 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gil)", () => {
		expect(p.parse("1 Rongo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Rongo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gil)", () => {
		expect(p.parse("2 Rongo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Rongo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (gil)", () => {
		expect(p.parse("1.Rongorongo 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (gil)", () => {
		expect(p.parse("2.Rongorongo 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (gil)", () => {
		expect(p.parse("Etira 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (gil)", () => {
		expect(p.parse("Neemia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (gil)", () => {
		expect(p.parse("Etita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (gil)", () => {
		expect(p.parse("Iobi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (gil)", () => {
		expect(p.parse("Taian Areru 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Areru 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (gil)", () => {
		expect(p.parse("Taeka n Rabakau 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Tae 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (gil)", () => {
		expect(p.parse("Te Minita 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (gil)", () => {
		expect(p.parse("Ana Anene Toromon 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Anene 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (gil)", () => {
		expect(p.parse("Ieremia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (gil)", () => {
		expect(p.parse("Etekiera 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (gil)", () => {
		expect(p.parse("Taniera 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (gil)", () => {
		expect(p.parse("Otea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (gil)", () => {
		expect(p.parse("Ioera 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (gil)", () => {
		expect(p.parse("Amota 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (gil)", () => {
		expect(p.parse("Ob'aria 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (gil)", () => {
		expect(p.parse("Iona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (gil)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (gil)", () => {
		expect(p.parse("Naum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (gil)", () => {
		expect(p.parse("Ab'akuka 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (gil)", () => {
		expect(p.parse("Teb'ania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (gil)", () => {
		expect(p.parse("Akai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (gil)", () => {
		expect(p.parse("Tekaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (gil)", () => {
		expect(p.parse("Maraki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (gil)", () => {
		expect(p.parse("Mataio 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (gil)", () => {
		expect(p.parse("Mareko 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (gil)", () => {
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gil)", () => {
		expect(p.parse("1.Ioane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gil)", () => {
		expect(p.parse("2.Ioane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (gil)", () => {
		expect(p.parse("3.Ioane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (gil)", () => {
		expect(p.parse("1 Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (gil)", () => {
		expect(p.parse("2 Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (gil)", () => {
		expect(p.parse("Ioane 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (gil)", () => {
		expect(p.parse("M'akuri 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (gil)", () => {
		expect(p.parse("I-Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("I-Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gil)", () => {
		expect(p.parse("1 I-Kori 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. I-Kori 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gil)", () => {
		expect(p.parse("2 I-Kori 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. I-Kori 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (gil)", () => {
		expect(p.parse("1.I-Korinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (gil)", () => {
		expect(p.parse("2.I-Korinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (gil)", () => {
		expect(p.parse("I-Korote 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("I-Koro 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (gil)", () => {
		expect(p.parse("I-Karatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("I-Ka 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (gil)", () => {
		expect(p.parse("I-Ebeto 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("I-Eb 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (gil)", () => {
		expect(p.parse("I-Biribi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("I-Bi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gil)", () => {
		expect(p.parse("1 I-Tet 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. I-Tet 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gil)", () => {
		expect(p.parse("2 I-Tet 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. I-Tet 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (gil)", () => {
		expect(p.parse("1.I-Tetaronike 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (gil)", () => {
		expect(p.parse("2.I-Tetaronike 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gil)", () => {
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gil)", () => {
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (gil)", () => {
		expect(p.parse("1.Timoteo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (gil)", () => {
		expect(p.parse("2.Timoteo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (gil)", () => {
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (gil)", () => {
		expect(p.parse("Biremon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (gil)", () => {
		expect(p.parse("Ebera 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (gil)", () => {
		expect(p.parse("Iakobo 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gil)", () => {
		expect(p.parse("1 Bet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Bet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gil)", () => {
		expect(p.parse("2 Bet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Bet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (gil)", () => {
		expect(p.parse("1.Betero 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (gil)", () => {
		expect(p.parse("2.Betero 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (gil)", () => {
		expect(p.parse("Iuta 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (gil)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (gil)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1.Ioane - 3.Ioane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1.Ioane – 3.Ioane").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1.Ioane — 3.Ioane").osis()).toEqual("1John.1-3John.1");
	});
});

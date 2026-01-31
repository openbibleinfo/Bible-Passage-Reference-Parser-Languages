"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/wal.js";

describe("Localized book Gen (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (wal)", () => {
		expect(p.parse("Doomettaabaa 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Dom 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (wal)", () => {
		expect(p.parse("Kessaabaa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Kess 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (wal)", () => {
		expect(p.parse("Wogaabaa 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Wog 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (wal)", () => {
		expect(p.parse("Qoodaabaa 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Qod 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (wal)", () => {
		expect(p.parse("Ermmaasa Zilaassaa 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (wal)", () => {
		expect(p.parse("Ajjuutaa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Aju 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (wal)", () => {
		expect(p.parse("Zaarettido Wogaa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("ZarW 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (wal)", () => {
		expect(p.parse("Yaasu Maxaafaa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yas 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (wal)", () => {
		expect(p.parse("Daannatu Maxaafaa 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Dana 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (wal)", () => {
		expect(p.parse("Uruti Maxaafaa 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (wal)", () => {
		expect(p.parse("Isiyaasa 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isiy 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (wal)", () => {
		expect(p.parse("Sameela Maxaafaa Koiruwaa 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (wal)", () => {
		expect(p.parse("Sameela Maxaafaa Naa77anttuwaa 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (wal)", () => {
		expect(p.parse("Kawotu Maxaafaa Koiruwaa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1Kaw 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (wal)", () => {
		expect(p.parse("Kawotu Maxaafaa Naa77anttuwaa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2Kaw 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (wal)", () => {
		expect(p.parse("Hanidabaa Odiya Koiro Maxaafaa 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1HanO 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (wal)", () => {
		expect(p.parse("Hanidabaa Odiya Naa77antto Maxaafaa 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2HanO 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (wal)", () => {
		expect(p.parse("Izira Maxaafaa 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Izir 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (wal)", () => {
		expect(p.parse("Nahimiyaa Maxaafaa 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nahi 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (wal)", () => {
		expect(p.parse("Asttiri Maxaafaa 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (wal)", () => {
		expect(p.parse("Iyyooba Maxaafaa 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Iyob 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (wal)", () => {
		expect(p.parse("Mazamure Maxaafaa 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Maz 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (wal)", () => {
		expect(p.parse("Leemiso Maxaafaa 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Lem 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (wal)", () => {
		expect(p.parse("Eranchchaa Maxaafaa 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (wal)", () => {
		expect(p.parse("Siiquwaa Sabaa 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (wal)", () => {
		expect(p.parse("Ermmaasa 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Erm 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (wal)", () => {
		expect(p.parse("Hizqqeela 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hiz 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (wal)", () => {
		expect(p.parse("Daaneela 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dane 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (wal)", () => {
		expect(p.parse("Hoose7a 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (wal)", () => {
		expect(p.parse("Yuu7eela 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yu7e 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (wal)", () => {
		expect(p.parse("Amoxa 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amox 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (wal)", () => {
		expect(p.parse("Abddiyyu 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (wal)", () => {
		expect(p.parse("Yoonaasa 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (wal)", () => {
		expect(p.parse("Mikiyaasa 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Miki 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (wal)", () => {
		expect(p.parse("Naahooma 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (wal)", () => {
		expect(p.parse("Imbbaaqooma 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Imba 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (wal)", () => {
		expect(p.parse("Sofonaasa 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (wal)", () => {
		expect(p.parse("Hagge 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (wal)", () => {
		expect(p.parse("Zakkaariyaasa 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakk 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (wal)", () => {
		expect(p.parse("Milkkiyaasa 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Milk 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (wal)", () => {
		expect(p.parse("Maatiyoosa 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (wal)", () => {
		expect(p.parse("Marqqoosa 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marq 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (wal)", () => {
		expect(p.parse("Luqaasa 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luq 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wal)", () => {
		expect(p.parse("1Yoh 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wal)", () => {
		expect(p.parse("2Yoh 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (wal)", () => {
		expect(p.parse("Heezzantto Yohaannisa 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (wal)", () => {
		expect(p.parse("Koiro Yohaannisa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Koiro. Yohaannisa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (wal)", () => {
		expect(p.parse("Naa77antto Yohaannisa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Naa77antto. Yohaannisa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (wal)", () => {
		expect(p.parse("Yohaannisa 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (wal)", () => {
		expect(p.parse("Yesuusi Kiittidoogeetu Oosuwaa 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Oos 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (wal)", () => {
		expect(p.parse("Roome 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wal)", () => {
		expect(p.parse("Koiro Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Koiro. Qoronttoosa 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wal)", () => {
		expect(p.parse("Naa77antto Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Naa77antto. Qoronttoosa 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (wal)", () => {
		expect(p.parse("1Qor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (wal)", () => {
		expect(p.parse("2Qor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (wal)", () => {
		expect(p.parse("Qolasiyaasa 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Qol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (wal)", () => {
		expect(p.parse("Galaatiyaa 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (wal)", () => {
		expect(p.parse("Efisoona 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efis 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (wal)", () => {
		expect(p.parse("Piliphphisiyuusa 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wal)", () => {
		expect(p.parse("Koiro Tasalonqqe 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Koiro. Tasalonqqe 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wal)", () => {
		expect(p.parse("Naa77antto Tasalonqqe 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Naa77antto. Tasalonqqe 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (wal)", () => {
		expect(p.parse("1Tas 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (wal)", () => {
		expect(p.parse("2Tas 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wal)", () => {
		expect(p.parse("Koiro Ximootiyoosa 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Koiro. Ximootiyoosa 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wal)", () => {
		expect(p.parse("Naa77antto Ximootiyoosa 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Naa77antto. Ximootiyoosa 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (wal)", () => {
		expect(p.parse("1Xim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (wal)", () => {
		expect(p.parse("2Xim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (wal)", () => {
		expect(p.parse("Tiitu 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (wal)", () => {
		expect(p.parse("Pilimoona 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (wal)", () => {
		expect(p.parse("Ibraawe 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibra 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (wal)", () => {
		expect(p.parse("Yaaqooba 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yaq 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wal)", () => {
		expect(p.parse("Koiro Pheexiroosa 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Koiro. Pheexiroosa 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wal)", () => {
		expect(p.parse("Naa77antto Pheexiroosa 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Naa77antto. Pheexiroosa 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (wal)", () => {
		expect(p.parse("1Phe 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (wal)", () => {
		expect(p.parse("2Phe 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (wal)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (wal)", () => {
		expect(p.parse("Yihudaa 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yihu 1:1").osis()).toEqual("Jude.1.1");
	});
});

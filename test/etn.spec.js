"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/etn.js";

describe("Localized book Gen (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (etn)", () => {
		expect(p.parse("Jenesis 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (etn)", () => {
		expect(p.parse("Eksotus 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (etn)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (etn)", () => {
		expect(p.parse("Numera 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (etn)", () => {
		expect(p.parse("Niji tas taigtai 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (etn)", () => {
		expect(p.parse("Nitai ehvaig 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (etn)", () => {
		expect(p.parse("Tyuteronome 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (etn)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (etn)", () => {
		expect(p.parse("Ilpu Atimi Tas Alep 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (etn)", () => {
		expect(p.parse("Rud 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (etn)", () => {
		expect(p.parse("Aiseya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (etn)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (etn)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (etn)", () => {
		expect(p.parse("1 Ilpu Atimarid 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Ilpu Atimarid 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (etn)", () => {
		expect(p.parse("2 Ilpu Atimarid 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Ilpu Atimarid 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (etn)", () => {
		expect(p.parse("1 Iji Tas Eled 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Iji Tas Eled 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 1Chr (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (etn)", () => {
		expect(p.parse("Iji Tas Eled 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (etn)", () => {
		expect(p.parse("2 Niji Tas Eled 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Niji Tas Eled 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 2Chr (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (etn)", () => {
		expect(p.parse("Niji Tas Eled 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (etn)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (etn)", () => {
		expect(p.parse("Nihemaia 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (etn)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (etn)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (etn)", () => {
		expect(p.parse("Saam 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (etn)", () => {
		expect(p.parse("Niji tas Arapakau 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (etn)", () => {
		expect(p.parse("Natimi Efehtas 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (etn)", () => {
		expect(p.parse("Nohranitai U Solomon 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (etn)", () => {
		expect(p.parse("Jeremaia 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (etn)", () => {
		expect(p.parse("Esikiel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (etn)", () => {
		expect(p.parse("Taniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (etn)", () => {
		expect(p.parse("Hosia 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (etn)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (etn)", () => {
		expect(p.parse("Emos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (etn)", () => {
		expect(p.parse("Obataia 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (etn)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (etn)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (etn)", () => {
		expect(p.parse("Nehum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (etn)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (etn)", () => {
		expect(p.parse("Sefanaia 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (etn)", () => {
		expect(p.parse("Haceai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (etn)", () => {
		expect(p.parse("Sekaraia 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (etn)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (etn)", () => {
		expect(p.parse("Madius 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (etn)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (etn)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (etn)", () => {
		expect(p.parse("1 Joanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joanes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (etn)", () => {
		expect(p.parse("2 Joanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joanes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (etn)", () => {
		expect(p.parse("3 Joanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joanes 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (etn)", () => {
		expect(p.parse("Joanes 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (etn)", () => {
		expect(p.parse("Niji auritai o ilpu Apostolo. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Niji auritai o ilpu Apostolo 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (etn)", () => {
		expect(p.parse("Nupu Roma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (etn)", () => {
		expect(p.parse("1 Nupu Korindus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Nupu Korindus 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (etn)", () => {
		expect(p.parse("2 Nupu Korindus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Nupu Korindus 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (etn)", () => {
		expect(p.parse("Nupu Kolose 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (etn)", () => {
		expect(p.parse("Nupu Calesya 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (etn)", () => {
		expect(p.parse("Nupu Efesus 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (etn)", () => {
		expect(p.parse("Nupu Filipai 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (etn)", () => {
		expect(p.parse("1 Nupu Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Nupu Desalonaika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (etn)", () => {
		expect(p.parse("2 Nupu Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Nupu Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (etn)", () => {
		expect(p.parse("Nupu Desalonaika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (etn)", () => {
		expect(p.parse("1 Timodeus 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timodeus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (etn)", () => {
		expect(p.parse("2 Timodeus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timodeus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (etn)", () => {
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (etn)", () => {
		expect(p.parse("Filimon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (etn)", () => {
		expect(p.parse("Ilpu Hibru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (etn)", () => {
		expect(p.parse("Jakobus 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (etn)", () => {
		expect(p.parse("1 Pitrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pitrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (etn)", () => {
		expect(p.parse("2 Pitrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pitrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (etn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (etn)", () => {
		expect(p.parse("Juta 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/vmk.js";

describe("Localized book Gen (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (vmk)", () => {
		expect(p.parse("Epacerero 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (vmk)", () => {
		expect(p.parse("Okhuma 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (vmk)", () => {
		expect(p.parse("Levitiku 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (vmk)", () => {
		expect(p.parse("Nuumeru 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (vmk)", () => {
		expect(p.parse("Icipo Soolalamika 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (vmk)", () => {
		expect(p.parse("Ethupululo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (vmk)", () => {
		expect(p.parse("Deuteronomiyo 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (vmk)", () => {
		expect(p.parse("Yoxuwa 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (vmk)", () => {
		expect(p.parse("Ahooleli 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (vmk)", () => {
		expect(p.parse("Ruuti 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (vmk)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (vmk)", () => {
		expect(p.parse("1 Samuweli 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuweli 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (vmk)", () => {
		expect(p.parse("2 Samuweli 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuweli 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (vmk)", () => {
		expect(p.parse("1 Mamwene 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Mamwene 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (vmk)", () => {
		expect(p.parse("2 Mamwene 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Mamwene 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (vmk)", () => {
		expect(p.parse("1 Nyaha 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Nyaha 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (vmk)", () => {
		expect(p.parse("2 Nyaha 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Nyaha 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (vmk)", () => {
		expect(p.parse("Ezera 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (vmk)", () => {
		expect(p.parse("Nehemiya 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (vmk)", () => {
		expect(p.parse("Exteri 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (vmk)", () => {
		expect(p.parse("Yobi 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (vmk)", () => {
		expect(p.parse("Icipo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (vmk)", () => {
		expect(p.parse("Masu a Miruku 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (vmk)", () => {
		expect(p.parse("Namalaleiya 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (vmk)", () => {
		expect(p.parse("Ecipo Yooreeraxa 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (vmk)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (vmk)", () => {
		expect(p.parse("Ezekiyeli 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (vmk)", () => {
		expect(p.parse("Daniyeli 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (vmk)", () => {
		expect(p.parse("Hoxeya 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (vmk)", () => {
		expect(p.parse("Yoweli 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (vmk)", () => {
		expect(p.parse("Amosi 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (vmk)", () => {
		expect(p.parse("Obadiya 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (vmk)", () => {
		expect(p.parse("Yoonasi 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (vmk)", () => {
		expect(p.parse("Mikeyasi 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (vmk)", () => {
		expect(p.parse("Nahumi 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (vmk)", () => {
		expect(p.parse("Habakuki 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (vmk)", () => {
		expect(p.parse("Zefaniya 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (vmk)", () => {
		expect(p.parse("Axewu 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (vmk)", () => {
		expect(p.parse("Zakariya 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (vmk)", () => {
		expect(p.parse("Malekiya 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (vmk)", () => {
		expect(p.parse("Matheyo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (vmk)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (vmk)", () => {
		expect(p.parse("Luuka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (vmk)", () => {
		expect(p.parse("1 Yohaane 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohaane 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (vmk)", () => {
		expect(p.parse("2 Yohaane 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohaane 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (vmk)", () => {
		expect(p.parse("3 Yohaane 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Yohaane 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (vmk)", () => {
		expect(p.parse("Yohaane 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (vmk)", () => {
		expect(p.parse("Miteko 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (vmk)", () => {
		expect(p.parse("aRooma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (vmk)", () => {
		expect(p.parse("1 Akorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Akorinto 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (vmk)", () => {
		expect(p.parse("2 Akorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Akorinto 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (vmk)", () => {
		expect(p.parse("aKolosi 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (vmk)", () => {
		expect(p.parse("aGalata 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (vmk)", () => {
		expect(p.parse("awEfeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (vmk)", () => {
		expect(p.parse("aFilipi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (vmk)", () => {
		expect(p.parse("1 Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Atesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (vmk)", () => {
		expect(p.parse("2 Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Atesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (vmk)", () => {
		expect(p.parse("1 Timootheyo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timootheyo 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (vmk)", () => {
		expect(p.parse("2 Timootheyo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timootheyo 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (vmk)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (vmk)", () => {
		expect(p.parse("Filemone 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (vmk)", () => {
		expect(p.parse("aHeberi 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (vmk)", () => {
		expect(p.parse("Yakobe 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (vmk)", () => {
		expect(p.parse("1 Pedru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (vmk)", () => {
		expect(p.parse("2 Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (vmk)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (vmk)", () => {
		expect(p.parse("Yuda 1:1").osis()).toEqual("Jude.1.1");
	});
});

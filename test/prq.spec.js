"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/prq.js";

describe("Localized book Gen (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (prq)", () => {
		expect(p.parse("Itanta-nakari 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gn. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (prq)", () => {
		expect(p.parse("Éxodo 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Éx. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (prq)", () => {
		expect(p.parse("Leví-iti 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (prq)", () => {
		expect(p.parse("Ikarajiitzi 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Núm. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Rev (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (prq)", () => {
		expect(p.parse("Iñaakan-taitziri 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (prq)", () => {
		expect(p.parse("Apiiñaaniri 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deu. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (prq)", () => {
		expect(p.parse("Josué 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (prq)", () => {
		expect(p.parse("Jiwari-payi 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Jc. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Isa (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (prq)", () => {
		expect(p.parse("Isaías 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Is. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (prq)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 S. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. S. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (prq)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 S. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. S. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (prq)", () => {
		expect(p.parse("1 Pinkathari-Payi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 R. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Pinkathari-Payi 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. R. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (prq)", () => {
		expect(p.parse("2 Pinkathari-Payi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 R. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Pinkathari-Payi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. R. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 2Chr (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (prq)", () => {
		expect(p.parse("2 Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Cr. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Crónicas 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Cr. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (prq)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esd. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Job (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (prq)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (prq)", () => {
		expect(p.parse("Panthaantsi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sam. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (prq)", () => {
		expect(p.parse("Jeremías 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jr. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (prq)", () => {
		expect(p.parse("Ezequiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Eze. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (prq)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dn. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Jonah (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (prq)", () => {
		expect(p.parse("Jonás 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jon. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (prq)", () => {
		expect(p.parse("Miqueas 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mq. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Mal (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (prq)", () => {
		expect(p.parse("Malaquías 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (prq)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (prq)", () => {
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (prq)", () => {
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (prq)", () => {
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (prq)", () => {
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (prq)", () => {
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (prq)", () => {
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (prq)", () => {
		expect(p.parse("Yantayi-takiri 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (prq)", () => {
		expect(p.parse("Roma-satzi 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (prq)", () => {
		expect(p.parse("1 Corinto-satsi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corinto-satsi 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (prq)", () => {
		expect(p.parse("2 Corinto-satsi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corinto-satsi 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (prq)", () => {
		expect(p.parse("Colosas-satzi 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (prq)", () => {
		expect(p.parse("Galacia-satzi 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (prq)", () => {
		expect(p.parse("Efeso-satzi 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (prq)", () => {
		expect(p.parse("Filipos-satzi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (prq)", () => {
		expect(p.parse("1 Tesalónica-satzi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalónica-satzi 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (prq)", () => {
		expect(p.parse("2 Tesalónica-satzi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalónica-satzi 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (prq)", () => {
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (prq)", () => {
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (prq)", () => {
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (prq)", () => {
		expect(p.parse("Filemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (prq)", () => {
		expect(p.parse("Heber-iiti 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (prq)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (prq)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (prq)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (prq)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (prq)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

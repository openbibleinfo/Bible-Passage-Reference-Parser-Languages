"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/hnn.js";

describe("Localized book Gen (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (hnn)", () => {
		expect(p.parse("Gimpuunan 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gim. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (hnn)", () => {
		expect(p.parse("Pag-ighit 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Pag. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (hnn)", () => {
		expect(p.parse("Libitiku 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lib. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (hnn)", () => {
		expect(p.parse("Bilang 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bil. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (hnn)", () => {
		expect(p.parse("Karukuan 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (hnn)", () => {
		expect(p.parse("Ipinakakit 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (hnn)", () => {
		expect(p.parse("Diyuturunumiyu 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Diyut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (hnn)", () => {
		expect(p.parse("Huswi 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (hnn)", () => {
		expect(p.parse("Talaghusay 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Talag. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (hnn)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (hnn)", () => {
		expect(p.parse("Isayas 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (hnn)", () => {
		expect(p.parse("1 Samwil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samwil 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (hnn)", () => {
		expect(p.parse("2 Samwil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samwil 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (hnn)", () => {
		expect(p.parse("1 Hari 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Hari 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (hnn)", () => {
		expect(p.parse("2 Hari 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Hari 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (hnn)", () => {
		expect(p.parse("1 Krunika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kru. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Krunika 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kru. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (hnn)", () => {
		expect(p.parse("2 Krunika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kru. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Krunika 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kru. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (hnn)", () => {
		expect(p.parse("Isra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (hnn)", () => {
		expect(p.parse("Nihimyas 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nih. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (hnn)", () => {
		expect(p.parse("Istir 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (hnn)", () => {
		expect(p.parse("Hub 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (hnn)", () => {
		expect(p.parse("Kabagawan 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (hnn)", () => {
		expect(p.parse("Manugtudlu 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (hnn)", () => {
		expect(p.parse("Kanta ni Sulumun 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (hnn)", () => {
		expect(p.parse("Kanta 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (hnn)", () => {
		expect(p.parse("Hirimyas 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Hir. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (hnn)", () => {
		expect(p.parse("Isikil 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (hnn)", () => {
		expect(p.parse("Danyil 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (hnn)", () => {
		expect(p.parse("Husyas 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (hnn)", () => {
		expect(p.parse("Huwil 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (hnn)", () => {
		expect(p.parse("Amus 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (hnn)", () => {
		expect(p.parse("Ubadyas 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (hnn)", () => {
		expect(p.parse("Hunas 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (hnn)", () => {
		expect(p.parse("Mikas 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (hnn)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (hnn)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (hnn)", () => {
		expect(p.parse("Sipanyas 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sip. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (hnn)", () => {
		expect(p.parse("Hagay 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (hnn)", () => {
		expect(p.parse("Sakaryas 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (hnn)", () => {
		expect(p.parse("Malakyas 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (hnn)", () => {
		expect(p.parse("Matiyu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (hnn)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (hnn)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (hnn)", () => {
		expect(p.parse("1 Huwan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Hu. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Huwan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Hu. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (hnn)", () => {
		expect(p.parse("2 Huwan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Hu. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Huwan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Hu. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (hnn)", () => {
		expect(p.parse("3 Huwan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Hu. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Huwan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Hu. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (hnn)", () => {
		expect(p.parse("Huwan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Hu. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (hnn)", () => {
		expect(p.parse("Binwat 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Bin. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (hnn)", () => {
		expect(p.parse("Ruma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (hnn)", () => {
		expect(p.parse("1 Kurintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kur. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kurintu 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kur. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (hnn)", () => {
		expect(p.parse("2 Kurintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kur. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kurintu 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kur. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (hnn)", () => {
		expect(p.parse("Kulusas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kul. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (hnn)", () => {
		expect(p.parse("Galasya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (hnn)", () => {
		expect(p.parse("Ipisu 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (hnn)", () => {
		expect(p.parse("Pilipus 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (hnn)", () => {
		expect(p.parse("1 Tisalunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tis. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tisalunika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tis. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (hnn)", () => {
		expect(p.parse("2 Tisalunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tis. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tisalunika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tis. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (hnn)", () => {
		expect(p.parse("1 Timutiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timutiyu 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (hnn)", () => {
		expect(p.parse("2 Timutiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timutiyu 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (hnn)", () => {
		expect(p.parse("Titu 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (hnn)", () => {
		expect(p.parse("Pilimun 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (hnn)", () => {
		expect(p.parse("Hibriyu 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hib. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (hnn)", () => {
		expect(p.parse("Santiyagu 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("San. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (hnn)", () => {
		expect(p.parse("1 Pidru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pidru 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (hnn)", () => {
		expect(p.parse("2 Pidru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pidru 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (hnn)", () => {
		expect(p.parse("Hudas 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (hnn)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (hnn)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Huwan - 3 Huwan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Huwan – 3 Huwan").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Huwan — 3 Huwan").osis()).toEqual("1John.1-3John.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/pon.js";

describe("Localized book Gen (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (pon)", () => {
		expect(p.parse("Senesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Sen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (pon)", () => {
		expect(p.parse("Eksodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (pon)", () => {
		expect(p.parse("Lipai 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lip. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (pon)", () => {
		expect(p.parse("Nempe Kan 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nempe 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (pon)", () => {
		expect(p.parse("Koulen Kedepwidepw Kan 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Koul. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (pon)", () => {
		expect(p.parse("Kaudiahl 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kaudial 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Kaud. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (pon)", () => {
		expect(p.parse("Deuderonomi 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deud. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (pon)", () => {
		expect(p.parse("Sosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Sos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (pon)", () => {
		expect(p.parse("Sounkopwung Kan 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (pon)", () => {
		expect(p.parse("Rud 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (pon)", () => {
		expect(p.parse("Aiseia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Ais. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (pon)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Men Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Men Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Men. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Men. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (pon)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Men Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Men Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Men. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Men. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (pon)", () => {
		expect(p.parse("1 Nanmwarki Kan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Nan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Nanmwarki Kan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Nan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Men Nanmwarki Kan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Men Nan. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Men. Nanmwarki Kan 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Men. Nan. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (pon)", () => {
		expect(p.parse("2 Nanmwarki Kan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Nan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Nanmwarki Kan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Nan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Men Nanmwarki Kan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Men Nan. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Men. Nanmwarki Kan 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Men. Nan. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (pon)", () => {
		expect(p.parse("1 Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Men Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Men Kron. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Men. Kronikel 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Men. Kron. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (pon)", () => {
		expect(p.parse("2 Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Men Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Men Kron. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Men. Kronikel 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Men. Kron. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (pon)", () => {
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (pon)", () => {
		expect(p.parse("Nehmaia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (pon)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (pon)", () => {
		expect(p.parse("Sohp 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (pon)", () => {
		expect(p.parse("Lepin Padahk Audapan Kan 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Lep. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (pon)", () => {
		expect(p.parse("Eklesiasdes 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Ekl. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (pon)", () => {
		expect(p.parse("Melkahkahn Melkahka Kan 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("M.M.K. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (pon)", () => {
		expect(p.parse("Melkahka Kan 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Psalm 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Mel. 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Ps. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (pon)", () => {
		expect(p.parse("Seremaia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Ser. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (pon)", () => {
		expect(p.parse("Esekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ese. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (pon)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (pon)", () => {
		expect(p.parse("Oseia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Os. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (pon)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (pon)", () => {
		expect(p.parse("Eimwos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Ei. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (pon)", () => {
		expect(p.parse("Opadaia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Op. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (pon)", () => {
		expect(p.parse("Sona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (pon)", () => {
		expect(p.parse("Maika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (pon)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (pon)", () => {
		expect(p.parse("Apakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Apak. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (pon)", () => {
		expect(p.parse("Sepanaia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (pon)", () => {
		expect(p.parse("Akkai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ak. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (pon)", () => {
		expect(p.parse("Sekaraia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Sek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (pon)", () => {
		expect(p.parse("Malakai 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (pon)", () => {
		expect(p.parse("Matäus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Madiu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mad. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (pon)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mark 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (pon)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pon)", () => {
		expect(p.parse("Ioanes I 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pon)", () => {
		expect(p.parse("Ioanes II 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (pon)", () => {
		expect(p.parse("Ioanes III 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Sohn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Ioa 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (pon)", () => {
		expect(p.parse("1 Sohn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Sohn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Men Sohn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Men Ioa 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Men. Sohn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Men. Ioa 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (pon)", () => {
		expect(p.parse("2 Sohn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Sohn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Men Sohn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Men Ioa 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Men. Sohn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Men. Ioa 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (pon)", () => {
		expect(p.parse("Ioanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Sohn 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ioa 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (pon)", () => {
		expect(p.parse("Wiewia Kan 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wiawia 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wie. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Wia 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (pon)", () => {
		expect(p.parse("Men Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (pon)", () => {
		expect(p.parse("1 Korint I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korint I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men Korint I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men Kor 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men. Korint I 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men. Korint 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men. Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Men. Kor 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (pon)", () => {
		expect(p.parse("2 Korint II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korint II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men Korint II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men Kor 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men. Korint II 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men. Korint 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men. Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Men. Kor 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (pon)", () => {
		expect(p.parse("Men Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (pon)", () => {
		expect(p.parse("Men Kalesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kalesia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Kal 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (pon)", () => {
		expect(p.parse("Men Episus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Episos 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epis 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ep. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (pon)", () => {
		expect(p.parse("Men Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipai 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (pon)", () => {
		expect(p.parse("1 Tesalonik I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Deselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Des. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonik I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Deselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Des. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men Tesalonik I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men Deselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men Des. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men Tes 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men. Tesalonik I 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men. Deselonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men. Des. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Men. Tes 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (pon)", () => {
		expect(p.parse("2 Tesalonik II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Deselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Des. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonik II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Deselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Des. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men Tesalonik II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men Deselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men Des. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men Tes 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men. Tesalonik II 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men. Deselonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men. Des. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Men. Tes 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pon)", () => {
		expect(p.parse("1 Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men Tim 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men. Timoty 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Men. Tim 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pon)", () => {
		expect(p.parse("2 Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men Tim 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men. Timoty 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Men. Tim 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (pon)", () => {
		expect(p.parse("Timoteus I 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (pon)", () => {
		expect(p.parse("Timoteus II 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (pon)", () => {
		expect(p.parse("Taitus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tait. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (pon)", () => {
		expect(p.parse("Pailimwon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Pail. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (pon)", () => {
		expect(p.parse("Men Ipru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ipru 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (pon)", () => {
		expect(p.parse("Iakopus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Seims 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Iak 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pon)", () => {
		expect(p.parse("1 Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men Pet 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men. Piter 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men. Pit. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Men. Pet 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pon)", () => {
		expect(p.parse("2 Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men Pet 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men. Piter 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men. Pit. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Men. Pet 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (pon)", () => {
		expect(p.parse("Petrus I 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (pon)", () => {
		expect(p.parse("Petrus II 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (pon)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (pon)", () => {
		expect(p.parse("Iudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Sud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/eus.js";

describe("Localized book Gen (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (eus)", () => {
		expect(p.parse("Hasiera 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Jenesa 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (eus)", () => {
		expect(p.parse("Ecsodoa 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Irteera 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (eus)", () => {
		expect(p.parse("Lebitarrena 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lebiticoa 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (eus)", () => {
		expect(p.parse("Zenbakiak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Nombreac 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Sir (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Sir (eus)", () => {
		expect(p.parse("Ben Sirak 1:1").osis()).toEqual("Sir.1.1");
	});
});
describe("Localized book Wis (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Wis (eus)", () => {
		expect(p.parse("Jakinduria 1:1").osis()).toEqual("Wis.1.1");
	});
});
describe("Localized book Lam (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (eus)", () => {
		expect(p.parse("Jeremias Profetaren Deithoreac 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Negar Kantak 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book EpJer (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: EpJer (eus)", () => {
		expect(p.parse("Jeremiasen Gt. 1:1").osis()).toEqual("EpJer.1.1");
	});
});
describe("Localized book Rev (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (eus)", () => {
		expect(p.parse("Apokalipsia 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (eus)", () => {
		expect(p.parse("Deuteronomioa 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Duteronoma 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (eus)", () => {
		expect(p.parse("Josue 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (eus)", () => {
		expect(p.parse("Epaileak 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Juieac 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (eus)", () => {
		expect(p.parse("Erruth 1:1").osis()).toEqual("Ruth.1.1");
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (eus)", () => {
		expect(p.parse("Isaiasen Profecia 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Isaias 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (eus)", () => {
		expect(p.parse("1 Erregueac 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Erregueac 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (eus)", () => {
		expect(p.parse("2 Erregueac 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Erregueac 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (eus)", () => {
		expect(p.parse("1 Erregueac 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Erregeak 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Erregueac 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Erregeak 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (eus)", () => {
		expect(p.parse("2 Erregueac 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Erregeak 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Erregueac 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Erregeak 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (eus)", () => {
		expect(p.parse("1 Paralipomenac 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Kronikak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Paralipomenac 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Kronikak 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (eus)", () => {
		expect(p.parse("2 Paralipomenac 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Kronikak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Paralipomenac 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Kronikak 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (eus)", () => {
		expect(p.parse("Esdras 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (eus)", () => {
		expect(p.parse("Nehemias 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Job (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (eus)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (eus)", () => {
		expect(p.parse("Psalmoac 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Salmoak 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (eus)", () => {
		expect(p.parse("Esaera Zaharrak 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Erran-çaharrac 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (eus)", () => {
		expect(p.parse("Eclesiastesa 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kohelet 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (eus)", () => {
		expect(p.parse("Salomonen Cantiquetaco Cantica 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kantarik Ederrena 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (eus)", () => {
		expect(p.parse("Jeremiasen Profecia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jeremias 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (eus)", () => {
		expect(p.parse("Ecequielen Profecia 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Ezekiel 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Hos (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (eus)", () => {
		expect(p.parse("Oseeren Profecia 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Oseas 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (eus)", () => {
		expect(p.parse("Joelen Profecia 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (eus)", () => {
		expect(p.parse("Amosen Profecia 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (eus)", () => {
		expect(p.parse("Abdiasen Profecia 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Abdias 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (eus)", () => {
		expect(p.parse("Jonasen Profecia 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Jonas 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (eus)", () => {
		expect(p.parse("Miqueasen Profecia 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mikeas 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (eus)", () => {
		expect(p.parse("Nahumen Profecia 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (eus)", () => {
		expect(p.parse("Habacuquen Profecia 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (eus)", () => {
		expect(p.parse("Sophoniasen Profecia 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Sofonias 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (eus)", () => {
		expect(p.parse("Agjeoren Profecia 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Ageo 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (eus)", () => {
		expect(p.parse("Çacariasen Profecia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zakarias 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (eus)", () => {
		expect(p.parse("Malaquiasen Profecia 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Malakias 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (eus)", () => {
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (eus)", () => {
		expect(p.parse("Markos 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (eus)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (eus)", () => {
		expect(p.parse("1 Joan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joan 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (eus)", () => {
		expect(p.parse("2 Joan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joan 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (eus)", () => {
		expect(p.parse("3 Joan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Joan 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (eus)", () => {
		expect(p.parse("Joan 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (eus)", () => {
		expect(p.parse("Eginak 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (eus)", () => {
		expect(p.parse("Erromatarrei 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (eus)", () => {
		expect(p.parse("1 Korintoarrei 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintoarrei 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (eus)", () => {
		expect(p.parse("2 Korintoarrei 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintoarrei 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (eus)", () => {
		expect(p.parse("Kolosarrei 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (eus)", () => {
		expect(p.parse("Galaziarrei 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (eus)", () => {
		expect(p.parse("Efesoarrei 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (eus)", () => {
		expect(p.parse("Filipoarrei 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (eus)", () => {
		expect(p.parse("1 Tesalonikarrei 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonikarrei 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (eus)", () => {
		expect(p.parse("2 Tesalonikarrei 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonikarrei 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (eus)", () => {
		expect(p.parse("1 Timoteori 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteori 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (eus)", () => {
		expect(p.parse("2 Timoteori 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteori 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (eus)", () => {
		expect(p.parse("Titori 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (eus)", () => {
		expect(p.parse("Filemoni 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (eus)", () => {
		expect(p.parse("Hebrearrei 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (eus)", () => {
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (eus)", () => {
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (eus)", () => {
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (eus)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Localized book Tob (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Tob (eus)", () => {
		expect(p.parse("Tobit 1:1").osis()).toEqual("Tob.1.1");
	});
});
describe("Localized book Jdt (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jdt (eus)", () => {
		expect(p.parse("Judit 1:1").osis()).toEqual("Jdt.1.1");
	});
});
describe("Localized book Bar (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Bar (eus)", () => {
		expect(p.parse("Baruk 1:1").osis()).toEqual("Bar.1.1");
	});
});
describe("Localized book 1Macc (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Macc (eus)", () => {
		expect(p.parse("1 Makabearrak 1:1").osis()).toEqual("1Macc.1.1");
		expect(p.parse("1. Makabearrak 1:1").osis()).toEqual("1Macc.1.1");
	});
});
describe("Localized book 2Macc (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Macc (eus)", () => {
		expect(p.parse("2 Makabearrak 1:1").osis()).toEqual("2Macc.1.1");
		expect(p.parse("2. Makabearrak 1:1").osis()).toEqual("2Macc.1.1");
	});
});
describe("Localized book Dan (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (eus)", () => {
		expect(p.parse("Danielen Profecia 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Esth (eus)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (eus)", () => {
		expect(p.parse("Esther 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});

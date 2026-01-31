"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/cak.js";

describe("Localized book Gen (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (cak)", () => {
		expect(p.parse("Gén 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (cak)", () => {
		expect(p.parse("Ex 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (cak)", () => {
		expect(p.parse("Lev 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (cak)", () => {
		expect(p.parse("Núm 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (cak)", () => {
		expect(p.parse("Lam 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (cak)", () => {
		expect(p.parse("Ri xekꞌalajrises chuvech ri apóstol San Juan 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Apocalipsis 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap. 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ap 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (cak)", () => {
		expect(p.parse("Deut 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (cak)", () => {
		expect(p.parse("Jos 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (cak)", () => {
		expect(p.parse("Jue 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (cak)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (cak)", () => {
		expect(p.parse("Isa 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (cak)", () => {
		expect(p.parse("1 Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ri Sam 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("Ri. Sam 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (cak)", () => {
		expect(p.parse("2 Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ri Sam 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("Ri. Sam 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (cak)", () => {
		expect(p.parse("1 Rey 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Rey 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ri Rey 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("Ri. Rey 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (cak)", () => {
		expect(p.parse("2 Rey 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Rey 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ri Rey 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("Ri. Rey 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (cak)", () => {
		expect(p.parse("1 Crón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Crón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ri Crón 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("Ri. Crón 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (cak)", () => {
		expect(p.parse("2 Crón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Crón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ri Crón 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("Ri. Crón 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (cak)", () => {
		expect(p.parse("Esd 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (cak)", () => {
		expect(p.parse("Neh 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (cak)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (cak)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (cak)", () => {
		expect(p.parse("Sal 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (cak)", () => {
		expect(p.parse("Pro 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (cak)", () => {
		expect(p.parse("Ecl 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (cak)", () => {
		expect(p.parse("Cnt 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (cak)", () => {
		expect(p.parse("Jer 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (cak)", () => {
		expect(p.parse("Ez 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (cak)", () => {
		expect(p.parse("Dn 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (cak)", () => {
		expect(p.parse("Os 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (cak)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (cak)", () => {
		expect(p.parse("Am 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (cak)", () => {
		expect(p.parse("Abd 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (cak)", () => {
		expect(p.parse("Jon 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (cak)", () => {
		expect(p.parse("Miq 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (cak)", () => {
		expect(p.parse("Nah 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (cak)", () => {
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (cak)", () => {
		expect(p.parse("Sof 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (cak)", () => {
		expect(p.parse("Hag 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (cak)", () => {
		expect(p.parse("Zac 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (cak)", () => {
		expect(p.parse("Mal 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (cak)", () => {
		expect(p.parse("Ri utzulaj chꞌabel ri nuꞌij achique ruchojmil nkucolotaj, ri tzꞌiban can roma ri San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("San Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mateo 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt. 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mt 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (cak)", () => {
		expect(p.parse("Ri utzulaj chꞌabel ri nuꞌij achique ruchojmil nkucolotaj, ri tzꞌiban can roma ri San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("San Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Marcos 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mc 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mr 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (cak)", () => {
		expect(p.parse("Ri utzulaj chꞌabel ri nuꞌij achique ruchojmil nkucolotaj, ri tzꞌiban can roma ri San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("San Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lucas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Lc 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cak)", () => {
		expect(p.parse("1Jn. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cak)", () => {
		expect(p.parse("2Jn. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (cak)", () => {
		expect(p.parse("Ri rox carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Juan 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Jn 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Jn. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (cak)", () => {
		expect(p.parse("Ri utzulaj chꞌabel ri nuꞌij achique ruchojmil nkucolotaj, ri tzꞌiban can roma ri San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("San Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Juan 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn. 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Jn 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book 1John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (cak)", () => {
		expect(p.parse("1 naꞌey carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. naꞌey carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri naꞌey carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri Jn 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri. naꞌey carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri. Juan 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri. Jn. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("Ri. Jn 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (cak)", () => {
		expect(p.parse("2 rucaꞌn carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. rucaꞌn carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri rucaꞌn carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri Jn 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri. rucaꞌn carta ri xutzꞌibaj ri apóstol San Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri. Juan 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri. Jn. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("Ri. Jn 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book Acts (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (cak)", () => {
		expect(p.parse("Ri rusamaj ri Dios ri xquiꞌen can ri apóstoles 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hechos 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch. 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Hch 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Romanos 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro. 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rom 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Ro 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cak)", () => {
		expect(p.parse("1 naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri Co 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri. Corintios 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri. Co. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("Ri. Co 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 1Cor (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (cak)", () => {
		expect(p.parse("1Co. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cak)", () => {
		expect(p.parse("2 rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri Co 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Corinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri. Corintios 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri. Co. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("Ri. Co 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 2Cor (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (cak)", () => {
		expect(p.parse("2Co. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Colosas 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Colosenses 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Col 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa rochꞌulef Galacia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gálatas 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá. 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Ga 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gá 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Efeso 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Efesios 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Filipos 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Filipenses 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil. 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Fil 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cak)", () => {
		expect(p.parse("1 naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri Ts 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri. Tesalonicenses 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri. Ts. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri. Te 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("Ri. Ts 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 1Thess (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (cak)", () => {
		expect(p.parse("1Ts. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cak)", () => {
		expect(p.parse("2 rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri Ts 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo chique ri quiniman ri Jesucristo pa tinamit Tesalónica 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri. Tesalonicenses 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri. Ts. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri. Te 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("Ri. Ts 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Thess (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (cak)", () => {
		expect(p.parse("2Ts. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cak)", () => {
		expect(p.parse("1 naꞌey carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri naꞌey carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri Ti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri. naꞌey carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri. Timoteo 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri. Ti. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("Ri. Ti 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 1Tim (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (cak)", () => {
		expect(p.parse("1Ti. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cak)", () => {
		expect(p.parse("2 rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri Ti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pablo che ri Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri. Timoteo 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri. Ti. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("Ri. Ti 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 2Tim (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (cak)", () => {
		expect(p.parse("2Ti. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo che ri Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tito 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Pablo che ri Filemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Filemón 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (cak)", () => {
		expect(p.parse("Ri carta ri tzꞌiban chique ri quiniman ri Jesucristo chiquicojol ri vinak hebreos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Hebreos 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Heb 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("He 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Santiago 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg. 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Stg 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cak)", () => {
		expect(p.parse("1 naꞌey carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. naꞌey carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri naꞌey carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri P 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri. naꞌey carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri. Pedro 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri. P. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri. Pe 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("Ri. P 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 1Pet (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (cak)", () => {
		expect(p.parse("1P. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cak)", () => {
		expect(p.parse("2 rucaꞌn carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri rucaꞌn carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri P 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri. rucaꞌn carta ri xutzꞌibaj ri apóstol San Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri. Pedro 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri. P. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri. Pe 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("Ri. P 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 2Pet (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (cak)", () => {
		expect(p.parse("2P. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (cak)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (cak)", () => {
		expect(p.parse("Ri carta ri xutzꞌibaj ri apóstol San Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("San Judas apostol 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud 1:1").osis()).toEqual("Jude.1.1");
	});
});

"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndo.js";

describe("Localized book Gen (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ndo)", () => {
		expect(p.parse("Genesis 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ndo)", () => {
		expect(p.parse("Eksodus 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Eks. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ndo)", () => {
		expect(p.parse("Levitikus 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Lev. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ndo)", () => {
		expect(p.parse("Numeri 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Num. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ndo)", () => {
		expect(p.parse("Oontakumandjimbo 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndo)", () => {
		expect(p.parse("Ehololo 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ndo)", () => {
		expect(p.parse("Deuteronomium 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Deut. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ndo)", () => {
		expect(p.parse("Josua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Jos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ndo)", () => {
		expect(p.parse("Aatokolihapu 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Aat. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ndo)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ndo)", () => {
		expect(p.parse("Jesaja 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Jes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ndo)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ndo)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ndo)", () => {
		expect(p.parse("1 Aakwaniilwa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 Aak. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Aakwaniilwa 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Aak. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ndo)", () => {
		expect(p.parse("2 Aakwaniilwa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Aak. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Aakwaniilwa 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Aak. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ndo)", () => {
		expect(p.parse("1 Ondjalulo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 Ondjal. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ondjalulo 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Ondjal. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ndo)", () => {
		expect(p.parse("2 Ondjalulo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 Ondjal. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ondjalulo 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Ondjal. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ndo)", () => {
		expect(p.parse("Esra. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Esra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ndo)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ndo)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ndo)", () => {
		expect(p.parse("Job 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ndo)", () => {
		expect(p.parse("Omapisalomi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Eps. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ndo)", () => {
		expect(p.parse("Omayeletumbulo 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ndo)", () => {
		expect(p.parse("Omuuvithi 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ndo)", () => {
		expect(p.parse("Ondjimbolela 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ndo)", () => {
		expect(p.parse("Jeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ndo)", () => {
		expect(p.parse("Hesekiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Hes. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ndo)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ndo)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ndo)", () => {
		expect(p.parse("Joel 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ndo)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ndo)", () => {
		expect(p.parse("Obadja 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ndo)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ndo)", () => {
		expect(p.parse("Mika. 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ndo)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ndo)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ndo)", () => {
		expect(p.parse("Sefania 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ndo)", () => {
		expect(p.parse("Haggai 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ndo)", () => {
		expect(p.parse("Sakaria 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ndo)", () => {
		expect(p.parse("Maleaki 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ndo)", () => {
		expect(p.parse("Mateus 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ndo)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndo)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndo)", () => {
		expect(p.parse("1 Johannes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johannes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndo)", () => {
		expect(p.parse("2 Johannes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johannes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndo)", () => {
		expect(p.parse("3 Johannes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. Johannes 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndo)", () => {
		expect(p.parse("Johannes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ndo)", () => {
		expect(p.parse("Iilonga 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Iil. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ndo)", () => {
		expect(p.parse("Aaroma 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ndo)", () => {
		expect(p.parse("1 Aakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Kor. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Aakorinto 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ndo)", () => {
		expect(p.parse("2 Aakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Kor. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Aakorinto 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ndo)", () => {
		expect(p.parse("Aakolossa 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ndo)", () => {
		expect(p.parse("Aagalati 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ndo)", () => {
		expect(p.parse("Aaefeso 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndo)", () => {
		expect(p.parse("Aafilippi 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndo)", () => {
		expect(p.parse("1 Aatessalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Aatessalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndo)", () => {
		expect(p.parse("2 Aatessalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Aatessalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ndo)", () => {
		expect(p.parse("1Timoteus 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndo)", () => {
		expect(p.parse("2 Timoteus 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoteus 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndo)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndo)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ndo)", () => {
		expect(p.parse("Aahebeli 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndo)", () => {
		expect(p.parse("Jakob 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndo)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ndo)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ndo)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndo)", () => {
		expect(p.parse("Judas 1:1").osis()).toEqual("Jude.1.1");
	});
});

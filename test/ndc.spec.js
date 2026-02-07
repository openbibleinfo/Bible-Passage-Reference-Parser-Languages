"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/ndc.js";

describe("Localized book Gen (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (ndc)", () => {
		expect(p.parse("Gen. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (ndc)", () => {
		expect(p.parse("Ek. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (ndc)", () => {
		expect(p.parse("Revhi 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (ndc)", () => {
		expect(p.parse("Zvi. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (ndc)", () => {
		expect(p.parse("Chi. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (ndc)", () => {
		expect(p.parse("Chakapangijihwa 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Chak. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (ndc)", () => {
		expect(p.parse("Dhuto. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (ndc)", () => {
		expect(p.parse("Josh. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (ndc)", () => {
		expect(p.parse("Vato. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (ndc)", () => {
		expect(p.parse("Ruthe 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (ndc)", () => {
		expect(p.parse("Isa. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (ndc)", () => {
		expect(p.parse("1 Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I Sam. 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("I. Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (ndc)", () => {
		expect(p.parse("2 Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II Sam. 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("II. Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (ndc)", () => {
		expect(p.parse("1 Madzi. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Madzi. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I Madzi. 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("I. Madzi. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (ndc)", () => {
		expect(p.parse("2 Madzi. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Madzi. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Madzi. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II Madzi 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Madzi. 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("II. Madzi 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (ndc)", () => {
		expect(p.parse("1 MaKro. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. MaKro. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I MaKro. 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("I. MaKro. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (ndc)", () => {
		expect(p.parse("2 MaKro. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. MaKro. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II MaKro. 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("II. MaKro. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (ndc)", () => {
		expect(p.parse("Ezura 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (ndc)", () => {
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (ndc)", () => {
		expect(p.parse("Esita 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (ndc)", () => {
		expect(p.parse("Jobe 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (ndc)", () => {
		expect(p.parse("Nduyo 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (ndc)", () => {
		expect(p.parse("Mazwi 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (ndc)", () => {
		expect(p.parse("Muchu. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (ndc)", () => {
		expect(p.parse("Sor. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (ndc)", () => {
		expect(p.parse("Jer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (ndc)", () => {
		expect(p.parse("Ezek. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (ndc)", () => {
		expect(p.parse("Dha. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (ndc)", () => {
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (ndc)", () => {
		expect(p.parse("Joeri 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (ndc)", () => {
		expect(p.parse("Amo. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (ndc)", () => {
		expect(p.parse("Obh. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (ndc)", () => {
		expect(p.parse("Jona 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (ndc)", () => {
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (ndc)", () => {
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (ndc)", () => {
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (ndc)", () => {
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (ndc)", () => {
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (ndc)", () => {
		expect(p.parse("Zek. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (ndc)", () => {
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (ndc)", () => {
		expect(p.parse("Mateu 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (ndc)", () => {
		expect(p.parse("Marku 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mar. 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (ndc)", () => {
		expect(p.parse("Ruk. 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Ruka 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 3John (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (ndc)", () => {
		expect(p.parse("III Johani 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("III Joh. 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 Joh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (ndc)", () => {
		expect(p.parse("1 Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I Joh. 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Johani 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("I. Joh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (ndc)", () => {
		expect(p.parse("2 Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II Joh. 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Johani 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("II. Joh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (ndc)", () => {
		expect(p.parse("Johani 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Joh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (ndc)", () => {
		expect(p.parse("Zvakayitwa ngo Vapostori 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Zvak. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (ndc)", () => {
		expect(p.parse("VaRoma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("VaR. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (ndc)", () => {
		expect(p.parse("1 Vakorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 Vak. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 VaK. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vakorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Vak. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. VaK. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vakorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I Vak. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I VaK. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vakorinte 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. Vak. 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("I. VaK. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (ndc)", () => {
		expect(p.parse("2 Vakorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 Vak. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 VaK. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vakorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Vak. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. VaK. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vakorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II Vak. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II VaK. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vakorinte 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. Vak. 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("II. VaK. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (ndc)", () => {
		expect(p.parse("VaKorose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("VaKo. 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Vak. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (ndc)", () => {
		expect(p.parse("Vagaratiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("VaG. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (ndc)", () => {
		expect(p.parse("Vaefesu 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("VaEfe. 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Vaef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (ndc)", () => {
		expect(p.parse("VaFiripi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("VaF. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (ndc)", () => {
		expect(p.parse("1 Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 VaTes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 Vat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. VaTes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Vat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I VaTes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I Vat. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vatesaronika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. VaTes. 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("I. Vat. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (ndc)", () => {
		expect(p.parse("2 Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 VaTes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 Vat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. VaTes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Vat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II VaTes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II Vat. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vatesaronika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. VaTes. 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("II. Vat. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 2Tim (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndc)", () => {
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (ndc)", () => {
		expect(p.parse("1 Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I Tim. 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Timoti 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("I. Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (ndc)", () => {
		expect(p.parse("2 Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II Tim. 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Timoti 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("II. Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (ndc)", () => {
		expect(p.parse("Titosi 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (ndc)", () => {
		expect(p.parse("Firimoni 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fir. 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Fr. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (ndc)", () => {
		expect(p.parse("VaHebheru 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Vahe. 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("VaH. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (ndc)", () => {
		expect(p.parse("Jakobe 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Jak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (ndc)", () => {
		expect(p.parse("1 Pedru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1 Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pedru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pedru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I Pet. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pedru 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Ped. 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("I. Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (ndc)", () => {
		expect(p.parse("2 Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2 Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II Pet. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pedru 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Ped. 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("II. Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (ndc)", () => {
		expect(p.parse("Judha 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Jud. 1:1").osis()).toEqual("Jude.1.1");
	});
});
describe("Parser helper should handle book ranges (ndc)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book ranges (ndc)", () => {
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johani - III Johani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johani – III Johani").osis()).toEqual("1John.1-3John.1");
		p.set_options({"book_alone_strategy":"full","book_sequence_strategy":"ignore","osis_compaction_strategy":"bc","captive_end_digits_strategy":"delete","testaments":"ona","book_range_strategy":"include"});
		expect(p.parse("1 Johani — III Johani").osis()).toEqual("1John.1-3John.1");
	});
});

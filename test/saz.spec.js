"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/saz.js";

describe("Localized book Gen (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (saz)", () => {
		expect(p.parse("ஆதியாகமம் 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("ஆதி 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (saz)", () => {
		expect(p.parse("யாத்ராகமம் 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("யாத் 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (saz)", () => {
		expect(p.parse("லேவியராகமம் 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("லேவி 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (saz)", () => {
		expect(p.parse("ஸங்க்²யாகமம் 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("ஸங்க் 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (saz)", () => {
		expect(p.parse("ரொட்னி 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (saz)", () => {
		expect(p.parse("தர்ஸன புஸ்தவ் 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("தர்ஸன 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (saz)", () => {
		expect(p.parse("உபாகமம் 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("உபா 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (saz)", () => {
		expect(p.parse("யோசுவா 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("யோசு 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (saz)", () => {
		expect(p.parse("நியாயாதிபதின் 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("நியா 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (saz)", () => {
		expect(p.parse("ரூத் 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (saz)", () => {
		expect(p.parse("ஏசாயா 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("ஏசா 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (saz)", () => {
		expect(p.parse("1 சாமுயேல் 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1 சாமு 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. சாமுயேல் 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. சாமு 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (saz)", () => {
		expect(p.parse("2 சாமுயேல் 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2 சாமு 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. சாமுயேல் 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. சாமு 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (saz)", () => {
		expect(p.parse("1 ரஜான் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1 ரஜா 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ரஜான் 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. ரஜா 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (saz)", () => {
		expect(p.parse("2 ரஜான் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2 ரஜா 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ரஜான் 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. ரஜா 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (saz)", () => {
		expect(p.parse("1 சரித்ரு 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1 சரி 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. சரித்ரு 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. சரி 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (saz)", () => {
		expect(p.parse("2 சரித்ரு 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2 சரி 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. சரித்ரு 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. சரி 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (saz)", () => {
		expect(p.parse("எஸ்ரா 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (saz)", () => {
		expect(p.parse("நெகேமியா 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("நெகே 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (saz)", () => {
		expect(p.parse("எஸ்தர் 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("எஸ் 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (saz)", () => {
		expect(p.parse("யோபு 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (saz)", () => {
		expect(p.parse("ஸங்கீதுன் 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("ஸங் 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (saz)", () => {
		expect(p.parse("நீதி வத்தான் 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("நீதி 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (saz)", () => {
		expect(p.parse("பிரஸங்கி 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("பிர 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (saz)", () => {
		expect(p.parse("உன்னத கீத் 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("உன் 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (saz)", () => {
		expect(p.parse("எரேமியா 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("எரே 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (saz)", () => {
		expect(p.parse("எசேக்கியேல் 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("எசே 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (saz)", () => {
		expect(p.parse("தானியேல் 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("தானி 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (saz)", () => {
		expect(p.parse("ஓசியா 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("ஓசி 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (saz)", () => {
		expect(p.parse("யோயேல் 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (saz)", () => {
		expect(p.parse("ஆமோஸ் 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("ஆமோ 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (saz)", () => {
		expect(p.parse("ஒபதியா 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("ஒப 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (saz)", () => {
		expect(p.parse("யோனா 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (saz)", () => {
		expect(p.parse("மீகா 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (saz)", () => {
		expect(p.parse("நாகூம் 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("நாகூ 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (saz)", () => {
		expect(p.parse("ஆபகூக் 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("ஆப 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (saz)", () => {
		expect(p.parse("செப்பனியா 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("செப் 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (saz)", () => {
		expect(p.parse("ஆகாய் 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("ஆகா 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (saz)", () => {
		expect(p.parse("சகரியா 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("சக 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (saz)", () => {
		expect(p.parse("மல்கியா 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("மல் 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (saz)", () => {
		expect(p.parse("மத்தேயு 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("மத் 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (saz)", () => {
		expect(p.parse("மாற்கு 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (saz)", () => {
		expect(p.parse("லூக்கா 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("லூக் 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (saz)", () => {
		expect(p.parse("1 யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1 யோவா 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவான் 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. யோவா 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (saz)", () => {
		expect(p.parse("2 யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2 யோவா 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவான் 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. யோவா 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (saz)", () => {
		expect(p.parse("3 யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3 யோவா 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவான் 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3. யோவா 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book John (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (saz)", () => {
		expect(p.parse("யோவான் 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("யோவா 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (saz)", () => {
		expect(p.parse("அப்போஸ்தலர் 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("அப் 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (saz)", () => {
		expect(p.parse("ரோமர் 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (saz)", () => {
		expect(p.parse("1 கொரிந்தியர் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1 கொரி 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரிந்தியர் 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. கொரி 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (saz)", () => {
		expect(p.parse("2 கொரிந்தியர் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2 கொரி 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரிந்தியர் 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. கொரி 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (saz)", () => {
		expect(p.parse("கொலோசெயர் 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("கொலோ 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (saz)", () => {
		expect(p.parse("கலாத்தியர் 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("கலா 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (saz)", () => {
		expect(p.parse("எபேசியர் 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("எபே 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (saz)", () => {
		expect(p.parse("பிலிப்பியர் 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("பிலி 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (saz)", () => {
		expect(p.parse("1 தெசலோனிக்கேயர் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1 தெச 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெசலோனிக்கேயர் 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. தெச 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (saz)", () => {
		expect(p.parse("2 தெசலோனிக்கேயர் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2 தெச 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெசலோனிக்கேயர் 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. தெச 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (saz)", () => {
		expect(p.parse("1 தீமோத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1 தீமோ 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. தீமோத்தேயு 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. தீமோ 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (saz)", () => {
		expect(p.parse("2 தீமோத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2 தீமோ 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. தீமோத்தேயு 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. தீமோ 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (saz)", () => {
		expect(p.parse("தீத்து 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("தீத் 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (saz)", () => {
		expect(p.parse("பிலேமோன் 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("பிலே 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (saz)", () => {
		expect(p.parse("எபிரேயர் 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("எபி 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (saz)", () => {
		expect(p.parse("யாக்கோபு 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("யாக் 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (saz)", () => {
		expect(p.parse("1 பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. பேதுரு 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (saz)", () => {
		expect(p.parse("2 பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. பேதுரு 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (saz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (saz)", () => {
		expect(p.parse("யூதா 1:1").osis()).toEqual("Jude.1.1");
	});
});

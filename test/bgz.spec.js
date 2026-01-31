"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/bgz.js";

describe("Localized book Gen (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (bgz)", () => {
		expect(p.parse("Tealian 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Tea. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (bgz)", () => {
		expect(p.parse("Tobuatan 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Tob. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (bgz)", () => {
		expect(p.parse("Basambuan 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Basam. 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (bgz)", () => {
		expect(p.parse("Bangaitan 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Bang. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (bgz)", () => {
		expect(p.parse("Mandaungan 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Manda. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (bgz)", () => {
		expect(p.parse("Inokitakon 1:1").osis()).toEqual("Rev.1.1");
		expect(p.parse("Ink. 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (bgz)", () => {
		expect(p.parse("Kuaikon 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Kua. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (bgz)", () => {
		expect(p.parse("Yosua 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yos. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (bgz)", () => {
		expect(p.parse("Tano-tano 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Tan. 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (bgz)", () => {
		expect(p.parse("Rut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (bgz)", () => {
		expect(p.parse("Yesaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yes. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bgz)", () => {
		expect(p.parse("1 Samuel 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Samuel 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bgz)", () => {
		expect(p.parse("2 Samuel 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Samuel 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (bgz)", () => {
		expect(p.parse("1Sam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (bgz)", () => {
		expect(p.parse("2Sam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bgz)", () => {
		expect(p.parse("1 Tomundo-tomundo 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Tomundo-tomundo 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bgz)", () => {
		expect(p.parse("2 Tomundo-tomundo 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Tomundo-tomundo 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (bgz)", () => {
		expect(p.parse("1Tom. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (bgz)", () => {
		expect(p.parse("2Tom. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bgz)", () => {
		expect(p.parse("1 Tundunan 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Tundunan 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bgz)", () => {
		expect(p.parse("2 Tundunan 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Tundunan 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (bgz)", () => {
		expect(p.parse("1Tund. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (bgz)", () => {
		expect(p.parse("2Tund. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (bgz)", () => {
		expect(p.parse("Ezr. 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Ezra 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (bgz)", () => {
		expect(p.parse("Nehemia 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Neh. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (bgz)", () => {
		expect(p.parse("Ester 1:1").osis()).toEqual("Esth.1.1");
		expect(p.parse("Est. 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (bgz)", () => {
		expect(p.parse("Ayb. 1:1").osis()).toEqual("Job.1.1");
		expect(p.parse("Ayub 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Ps (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (bgz)", () => {
		expect(p.parse("Sadeong 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Sad. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Prov (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (bgz)", () => {
		expect(p.parse("Andean 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("And. 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (bgz)", () => {
		expect(p.parse("Pongotunggul 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Pongot. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (bgz)", () => {
		expect(p.parse("Kidung Tuuno 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Kit. 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Jer (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (bgz)", () => {
		expect(p.parse("Yeremia 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (bgz)", () => {
		expect(p.parse("Yeheskiel 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeh. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (bgz)", () => {
		expect(p.parse("Daniel 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Dan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (bgz)", () => {
		expect(p.parse("Hosea 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Hos. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (bgz)", () => {
		expect(p.parse("Yoel 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yl. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (bgz)", () => {
		expect(p.parse("Amos 1:1").osis()).toEqual("Amos.1.1");
		expect(p.parse("Am. 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (bgz)", () => {
		expect(p.parse("Obaja 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Ob. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (bgz)", () => {
		expect(p.parse("Yunus 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (bgz)", () => {
		expect(p.parse("Mikha 1:1").osis()).toEqual("Mic.1.1");
		expect(p.parse("Mik. 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (bgz)", () => {
		expect(p.parse("Nahum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nah. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (bgz)", () => {
		expect(p.parse("Habakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Hab. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (bgz)", () => {
		expect(p.parse("Zefanya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Zef. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (bgz)", () => {
		expect(p.parse("Hagai 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Hag. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (bgz)", () => {
		expect(p.parse("Zakharia 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Zak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (bgz)", () => {
		expect(p.parse("Maleaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (bgz)", () => {
		expect(p.parse("Matius 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (bgz)", () => {
		expect(p.parse("Markus 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (bgz)", () => {
		expect(p.parse("Lukas 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bgz)", () => {
		expect(p.parse("1Yoh. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bgz)", () => {
		expect(p.parse("2Yoh. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (bgz)", () => {
		expect(p.parse("3 Yohanes 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Yoh. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (bgz)", () => {
		expect(p.parse("1 Yohanes 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yohanes 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (bgz)", () => {
		expect(p.parse("2 Yohanes 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yohanes 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (bgz)", () => {
		expect(p.parse("Yohanes 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Yoh. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (bgz)", () => {
		expect(p.parse("Rasul-rasul Salitano 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Kis. R. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (bgz)", () => {
		expect(p.parse("Roma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Rm. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bgz)", () => {
		expect(p.parse("1 Korintus 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korintus 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bgz)", () => {
		expect(p.parse("2 Korintus 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korintus 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (bgz)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (bgz)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (bgz)", () => {
		expect(p.parse("Kolose 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (bgz)", () => {
		expect(p.parse("Galatia 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Gal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (bgz)", () => {
		expect(p.parse("Efesus 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Ef. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (bgz)", () => {
		expect(p.parse("Filipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Flp. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bgz)", () => {
		expect(p.parse("1 Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tesalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bgz)", () => {
		expect(p.parse("2 Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tesalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (bgz)", () => {
		expect(p.parse("1Tes. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (bgz)", () => {
		expect(p.parse("2Tes. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bgz)", () => {
		expect(p.parse("1 Timotius 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotius 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bgz)", () => {
		expect(p.parse("2 Timotius 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotius 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (bgz)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (bgz)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (bgz)", () => {
		expect(p.parse("Titus 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (bgz)", () => {
		expect(p.parse("Filemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Flm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (bgz)", () => {
		expect(p.parse("Ibrani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (bgz)", () => {
		expect(p.parse("Yakobus 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bgz)", () => {
		expect(p.parse("1 Petrus 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Petrus 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bgz)", () => {
		expect(p.parse("2 Petrus 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Petrus 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (bgz)", () => {
		expect(p.parse("1Ptr. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (bgz)", () => {
		expect(p.parse("2Ptr. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (bgz)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (bgz)", () => {
		expect(p.parse("Yudas 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yud. 1:1").osis()).toEqual("Jude.1.1");
	});
});

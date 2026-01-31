"use strict";
import { bcv_parser } from "bible-passage-reference-parser/esm/bcv_parser.js";
import * as lang from "../lang/dnw.js";

describe("Localized book Gen (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gen (dnw)", () => {
		expect(p.parse("Wakkagagerak 1:1").osis()).toEqual("Gen.1.1");
		expect(p.parse("Wak. 1:1").osis()).toEqual("Gen.1.1");
	});
});
describe("Localized book Exod (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Exod (dnw)", () => {
		expect(p.parse("Wundeegwaarak 1:1").osis()).toEqual("Exod.1.1");
		expect(p.parse("Wund. 1:1").osis()).toEqual("Exod.1.1");
	});
});
describe("Localized book Lev (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lev (dnw)", () => {
		expect(p.parse("Ala Unde 1:1").osis()).toEqual("Lev.1.1");
		expect(p.parse("Unde 1:1").osis()).toEqual("Lev.1.1");
	});
});
describe("Localized book Num (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Num (dnw)", () => {
		expect(p.parse("Linggineegwaarak 1:1").osis()).toEqual("Num.1.1");
		expect(p.parse("Lin. 1:1").osis()).toEqual("Num.1.1");
	});
});
describe("Localized book Lam (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Lam (dnw)", () => {
		expect(p.parse("Leendawi 1:1").osis()).toEqual("Lam.1.1");
		expect(p.parse("Le. 1:1").osis()).toEqual("Lam.1.1");
	});
});
describe("Localized book Rev (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rev (dnw)", () => {
		expect(p.parse("Wayu 1:1").osis()).toEqual("Rev.1.1");
	});
});
describe("Localized book Deut (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Deut (dnw)", () => {
		expect(p.parse("Pelaareegerak 1:1").osis()).toEqual("Deut.1.1");
		expect(p.parse("Pel. 1:1").osis()).toEqual("Deut.1.1");
	});
});
describe("Localized book Josh (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Josh (dnw)", () => {
		expect(p.parse("Yotuwa 1:1").osis()).toEqual("Josh.1.1");
		expect(p.parse("Yot. 1:1").osis()).toEqual("Josh.1.1");
	});
});
describe("Localized book Judg (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Judg (dnw)", () => {
		expect(p.parse("Owak Loongga 1:1").osis()).toEqual("Judg.1.1");
		expect(p.parse("Owak 1:1").osis()).toEqual("Judg.1.1");
	});
});
describe("Localized book Ruth (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ruth (dnw)", () => {
		expect(p.parse("Urut 1:1").osis()).toEqual("Ruth.1.1");
	});
});
describe("Localized book Isa (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Isa (dnw)", () => {
		expect(p.parse("Yetaya 1:1").osis()).toEqual("Isa.1.1");
		expect(p.parse("Yet. 1:1").osis()).toEqual("Isa.1.1");
	});
});
describe("Localized book 1Sam (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dnw)", () => {
		expect(p.parse("1 Tamuwen 1:1").osis()).toEqual("1Sam.1.1");
		expect(p.parse("1. Tamuwen 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dnw)", () => {
		expect(p.parse("2 Tamuwen 1:1").osis()).toEqual("2Sam.1.1");
		expect(p.parse("2. Tamuwen 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Sam (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Sam (dnw)", () => {
		expect(p.parse("1Tam. 1:1").osis()).toEqual("1Sam.1.1");
	});
});
describe("Localized book 2Sam (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Sam (dnw)", () => {
		expect(p.parse("2Tam. 1:1").osis()).toEqual("2Sam.1.1");
	});
});
describe("Localized book 1Kgs (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dnw)", () => {
		expect(p.parse("1 Endagembogut 1:1").osis()).toEqual("1Kgs.1.1");
		expect(p.parse("1. Endagembogut 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dnw)", () => {
		expect(p.parse("2 Endagembogut 1:1").osis()).toEqual("2Kgs.1.1");
		expect(p.parse("2. Endagembogut 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Kgs (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Kgs (dnw)", () => {
		expect(p.parse("1End. 1:1").osis()).toEqual("1Kgs.1.1");
	});
});
describe("Localized book 2Kgs (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Kgs (dnw)", () => {
		expect(p.parse("2End. 1:1").osis()).toEqual("2Kgs.1.1");
	});
});
describe("Localized book 1Chr (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dnw)", () => {
		expect(p.parse("1 Mbinineegwaarak 1:1").osis()).toEqual("1Chr.1.1");
		expect(p.parse("1. Mbinineegwaarak 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dnw)", () => {
		expect(p.parse("2 Mbinineegwaarak 1:1").osis()).toEqual("2Chr.1.1");
		expect(p.parse("2. Mbinineegwaarak 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book 1Chr (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Chr (dnw)", () => {
		expect(p.parse("1Mbin. 1:1").osis()).toEqual("1Chr.1.1");
	});
});
describe("Localized book 2Chr (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Chr (dnw)", () => {
		expect(p.parse("2Mbin. 1:1").osis()).toEqual("2Chr.1.1");
	});
});
describe("Localized book Ezra (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezra (dnw)", () => {
		expect(p.parse("Etara 1:1").osis()).toEqual("Ezra.1.1");
		expect(p.parse("Eta. 1:1").osis()).toEqual("Ezra.1.1");
	});
});
describe("Localized book Neh (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Neh (dnw)", () => {
		expect(p.parse("Nekemiya 1:1").osis()).toEqual("Neh.1.1");
		expect(p.parse("Nek. 1:1").osis()).toEqual("Neh.1.1");
	});
});
describe("Localized book Esth (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Esth (dnw)", () => {
		expect(p.parse("Etet 1:1").osis()).toEqual("Esth.1.1");
	});
});
describe("Localized book Job (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Job (dnw)", () => {
		expect(p.parse("Ayup 1:1").osis()).toEqual("Job.1.1");
	});
});
describe("Localized book Prov (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Prov (dnw)", () => {
		expect(p.parse("Kini Wuppiige 1:1").osis()).toEqual("Prov.1.1");
		expect(p.parse("Kini 1:1").osis()).toEqual("Prov.1.1");
	});
});
describe("Localized book Eccl (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eccl (dnw)", () => {
		expect(p.parse("Wone Alom Kibingga 1:1").osis()).toEqual("Eccl.1.1");
		expect(p.parse("Kib. 1:1").osis()).toEqual("Eccl.1.1");
	});
});
describe("Localized book Song (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Song (dnw)", () => {
		expect(p.parse("Ndawi Iya 1:1").osis()).toEqual("Song.1.1");
		expect(p.parse("Nda. Iya 1:1").osis()).toEqual("Song.1.1");
	});
});
describe("Localized book Ps (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ps (dnw)", () => {
		expect(p.parse("Ndawi 1:1").osis()).toEqual("Ps.1.1");
		expect(p.parse("Nda. 1:1").osis()).toEqual("Ps.1.1");
	});
});
describe("Localized book Jer (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jer (dnw)", () => {
		expect(p.parse("Yeremiya 1:1").osis()).toEqual("Jer.1.1");
		expect(p.parse("Yer. 1:1").osis()).toEqual("Jer.1.1");
	});
});
describe("Localized book Ezek (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Ezek (dnw)", () => {
		expect(p.parse("Yetikiyen 1:1").osis()).toEqual("Ezek.1.1");
		expect(p.parse("Yeti. 1:1").osis()).toEqual("Ezek.1.1");
	});
});
describe("Localized book Dan (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Dan (dnw)", () => {
		expect(p.parse("Ndaniyen 1:1").osis()).toEqual("Dan.1.1");
		expect(p.parse("Ndan. 1:1").osis()).toEqual("Dan.1.1");
	});
});
describe("Localized book Hos (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hos (dnw)", () => {
		expect(p.parse("Oteya 1:1").osis()).toEqual("Hos.1.1");
		expect(p.parse("Ote. 1:1").osis()).toEqual("Hos.1.1");
	});
});
describe("Localized book Joel (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Joel (dnw)", () => {
		expect(p.parse("Yowen 1:1").osis()).toEqual("Joel.1.1");
		expect(p.parse("Yow. 1:1").osis()).toEqual("Joel.1.1");
	});
});
describe("Localized book Amos (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Amos (dnw)", () => {
		expect(p.parse("Amot 1:1").osis()).toEqual("Amos.1.1");
	});
});
describe("Localized book Obad (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Obad (dnw)", () => {
		expect(p.parse("Obaya 1:1").osis()).toEqual("Obad.1.1");
		expect(p.parse("Oba. 1:1").osis()).toEqual("Obad.1.1");
	});
});
describe("Localized book Jonah (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jonah (dnw)", () => {
		expect(p.parse("Yunut 1:1").osis()).toEqual("Jonah.1.1");
		expect(p.parse("Yun. 1:1").osis()).toEqual("Jonah.1.1");
	});
});
describe("Localized book Mic (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mic (dnw)", () => {
		expect(p.parse("Mika 1:1").osis()).toEqual("Mic.1.1");
	});
});
describe("Localized book Nah (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Nah (dnw)", () => {
		expect(p.parse("Nakum 1:1").osis()).toEqual("Nah.1.1");
		expect(p.parse("Nak. 1:1").osis()).toEqual("Nah.1.1");
	});
});
describe("Localized book Hab (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hab (dnw)", () => {
		expect(p.parse("Abakuk 1:1").osis()).toEqual("Hab.1.1");
		expect(p.parse("Aba. 1:1").osis()).toEqual("Hab.1.1");
	});
});
describe("Localized book Zeph (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zeph (dnw)", () => {
		expect(p.parse("Tepaniya 1:1").osis()).toEqual("Zeph.1.1");
		expect(p.parse("Tep. 1:1").osis()).toEqual("Zeph.1.1");
	});
});
describe("Localized book Hag (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Hag (dnw)", () => {
		expect(p.parse("Agayi 1:1").osis()).toEqual("Hag.1.1");
		expect(p.parse("Aga. 1:1").osis()).toEqual("Hag.1.1");
	});
});
describe("Localized book Zech (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Zech (dnw)", () => {
		expect(p.parse("Takariya 1:1").osis()).toEqual("Zech.1.1");
		expect(p.parse("Tak. 1:1").osis()).toEqual("Zech.1.1");
	});
});
describe("Localized book Mal (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mal (dnw)", () => {
		expect(p.parse("Maleyaki 1:1").osis()).toEqual("Mal.1.1");
		expect(p.parse("Mal. 1:1").osis()).toEqual("Mal.1.1");
	});
});
describe("Localized book Matt (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Matt (dnw)", () => {
		expect(p.parse("Matiyut 1:1").osis()).toEqual("Matt.1.1");
		expect(p.parse("Mat. 1:1").osis()).toEqual("Matt.1.1");
	});
});
describe("Localized book Mark (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Mark (dnw)", () => {
		expect(p.parse("Marakut 1:1").osis()).toEqual("Mark.1.1");
		expect(p.parse("Mrk. 1:1").osis()).toEqual("Mark.1.1");
	});
});
describe("Localized book Luke (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Luke (dnw)", () => {
		expect(p.parse("Lukat 1:1").osis()).toEqual("Luke.1.1");
		expect(p.parse("Luk. 1:1").osis()).toEqual("Luke.1.1");
	});
});
describe("Localized book 1John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dnw)", () => {
		expect(p.parse("1Ya. 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dnw)", () => {
		expect(p.parse("2Ya. 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book 3John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 3John (dnw)", () => {
		expect(p.parse("3 Yaya 1:1").osis()).toEqual("3John.1.1");
		expect(p.parse("3Ya. 1:1").osis()).toEqual("3John.1.1");
	});
});
describe("Localized book 1John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1John (dnw)", () => {
		expect(p.parse("1 Yaya 1:1").osis()).toEqual("1John.1.1");
		expect(p.parse("1. Yaya 1:1").osis()).toEqual("1John.1.1");
	});
});
describe("Localized book 2John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2John (dnw)", () => {
		expect(p.parse("2 Yaya 1:1").osis()).toEqual("2John.1.1");
		expect(p.parse("2. Yaya 1:1").osis()).toEqual("2John.1.1");
	});
});
describe("Localized book John (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: John (dnw)", () => {
		expect(p.parse("Yaya 1:1").osis()).toEqual("John.1.1");
		expect(p.parse("Ya. 1:1").osis()).toEqual("John.1.1");
	});
});
describe("Localized book Acts (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Acts (dnw)", () => {
		expect(p.parse("Nappiigak 1:1").osis()).toEqual("Acts.1.1");
		expect(p.parse("Nap. 1:1").osis()).toEqual("Acts.1.1");
	});
});
describe("Localized book Rom (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Rom (dnw)", () => {
		expect(p.parse("Oroma 1:1").osis()).toEqual("Rom.1.1");
		expect(p.parse("Oro. 1:1").osis()).toEqual("Rom.1.1");
	});
});
describe("Localized book 1Cor (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dnw)", () => {
		expect(p.parse("1 Korindut 1:1").osis()).toEqual("1Cor.1.1");
		expect(p.parse("1. Korindut 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dnw)", () => {
		expect(p.parse("2 Korindut 1:1").osis()).toEqual("2Cor.1.1");
		expect(p.parse("2. Korindut 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book 1Cor (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Cor (dnw)", () => {
		expect(p.parse("1Kor. 1:1").osis()).toEqual("1Cor.1.1");
	});
});
describe("Localized book 2Cor (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Cor (dnw)", () => {
		expect(p.parse("2Kor. 1:1").osis()).toEqual("2Cor.1.1");
	});
});
describe("Localized book Col (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Col (dnw)", () => {
		expect(p.parse("Kolote 1:1").osis()).toEqual("Col.1.1");
		expect(p.parse("Kol. 1:1").osis()).toEqual("Col.1.1");
	});
});
describe("Localized book Gal (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Gal (dnw)", () => {
		expect(p.parse("Nggalatiya 1:1").osis()).toEqual("Gal.1.1");
		expect(p.parse("Nggal. 1:1").osis()).toEqual("Gal.1.1");
	});
});
describe("Localized book Eph (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Eph (dnw)", () => {
		expect(p.parse("Epetut 1:1").osis()).toEqual("Eph.1.1");
		expect(p.parse("Epe. 1:1").osis()).toEqual("Eph.1.1");
	});
});
describe("Localized book Phil (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phil (dnw)", () => {
		expect(p.parse("Pilipi 1:1").osis()).toEqual("Phil.1.1");
		expect(p.parse("Pil. 1:1").osis()).toEqual("Phil.1.1");
	});
});
describe("Localized book 1Thess (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dnw)", () => {
		expect(p.parse("1 Tetalonika 1:1").osis()).toEqual("1Thess.1.1");
		expect(p.parse("1. Tetalonika 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dnw)", () => {
		expect(p.parse("2 Tetalonika 1:1").osis()).toEqual("2Thess.1.1");
		expect(p.parse("2. Tetalonika 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Thess (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Thess (dnw)", () => {
		expect(p.parse("1Tet. 1:1").osis()).toEqual("1Thess.1.1");
	});
});
describe("Localized book 2Thess (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Thess (dnw)", () => {
		expect(p.parse("2Tet. 1:1").osis()).toEqual("2Thess.1.1");
	});
});
describe("Localized book 1Tim (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dnw)", () => {
		expect(p.parse("1 Timotiyut 1:1").osis()).toEqual("1Tim.1.1");
		expect(p.parse("1. Timotiyut 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dnw)", () => {
		expect(p.parse("2 Timotiyut 1:1").osis()).toEqual("2Tim.1.1");
		expect(p.parse("2. Timotiyut 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book 1Tim (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Tim (dnw)", () => {
		expect(p.parse("1Tim. 1:1").osis()).toEqual("1Tim.1.1");
	});
});
describe("Localized book 2Tim (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Tim (dnw)", () => {
		expect(p.parse("2Tim. 1:1").osis()).toEqual("2Tim.1.1");
	});
});
describe("Localized book Titus (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Titus (dnw)", () => {
		expect(p.parse("Titut 1:1").osis()).toEqual("Titus.1.1");
		expect(p.parse("Tit. 1:1").osis()).toEqual("Titus.1.1");
	});
});
describe("Localized book Phlm (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Phlm (dnw)", () => {
		expect(p.parse("Pilemon 1:1").osis()).toEqual("Phlm.1.1");
		expect(p.parse("Plm. 1:1").osis()).toEqual("Phlm.1.1");
	});
});
describe("Localized book Heb (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Heb (dnw)", () => {
		expect(p.parse("Iberani 1:1").osis()).toEqual("Heb.1.1");
		expect(p.parse("Ibr. 1:1").osis()).toEqual("Heb.1.1");
	});
});
describe("Localized book Jas (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jas (dnw)", () => {
		expect(p.parse("Yakobut 1:1").osis()).toEqual("Jas.1.1");
		expect(p.parse("Yak. 1:1").osis()).toEqual("Jas.1.1");
	});
});
describe("Localized book 1Pet (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dnw)", () => {
		expect(p.parse("1 Peterut 1:1").osis()).toEqual("1Pet.1.1");
		expect(p.parse("1. Peterut 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dnw)", () => {
		expect(p.parse("2 Peterut 1:1").osis()).toEqual("2Pet.1.1");
		expect(p.parse("2. Peterut 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book 1Pet (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 1Pet (dnw)", () => {
		expect(p.parse("1Pet. 1:1").osis()).toEqual("1Pet.1.1");
	});
});
describe("Localized book 2Pet (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: 2Pet (dnw)", () => {
		expect(p.parse("2Pet. 1:1").osis()).toEqual("2Pet.1.1");
	});
});
describe("Localized book Jude (dnw)", () => {
	let p = {}
	beforeEach(() => {
		p = new bcv_parser(lang);
		p.set_options({ book_alone_strategy: "ignore", book_sequence_strategy: "ignore", osis_compaction_strategy: "bc", captive_end_digits_strategy: "delete", testaments: "ona" });
	});
	it("should handle book: Jude (dnw)", () => {
		expect(p.parse("Yurat 1:1").osis()).toEqual("Jude.1.1");
		expect(p.parse("Yur. 1:1").osis()).toEqual("Jude.1.1");
	});
});
